// src/WebsiteBuilder.jsx
import React, { useState, useMemo, useEffect, useCallback } from "react";
import TopBar from "./components/layout/TopBar";
import ProjectList from "./components/dashboard/ProjectList";
import EditorLayout from "./components/editor/EditorLayout";
import NewProjectView from "./components/dashboard/NewProjectView";
import {
  createInitialProjects,
  createNewProject,
  combineSections,
  createBlankSection,
} from "./state/projectsStore";
import { slugify } from "./utils/generateSlug";
import { templates } from "./utils/templates";
import { loadProjects, saveProjects } from "./api/projectsApi";

// Only computed once when the module loads
const initialProjects = loadProjects(createInitialProjects);

export default function WebsiteBuilder() {
  const [view, setView] = useState("dashboard"); // "dashboard" | "new-project" | "editor"
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProjectId, setSelectedProjectId] = useState(
    initialProjects[0]?.id ?? null
  );

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) || null,
    [projects, selectedProjectId]
  );

  // 🔹 Persist projects any time they change
  useEffect(() => {
    saveProjects(projects);
  }, [projects]);

  // Ensure selected project stays valid if projects change
  useEffect(() => {
    if (!selectedProjectId && projects.length > 0) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  const updateProject = useCallback((id, updater) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const updates = typeof updater === "function" ? updater(p) : updater;
        return {
          ...p,
          ...updates,
          updatedAt: new Date().toISOString(),
        };
      })
    );
  }, []);

  const updateProjectSections = useCallback((projectId, nextSectionsFactory) => {
    updateProject(projectId, (project) => {
      const nextSections =
        typeof nextSectionsFactory === "function"
          ? nextSectionsFactory(project.sections || [])
          : nextSectionsFactory || [];
      const combined = combineSections(nextSections);
      return {
        sections: nextSections,
        htmlCode: combined.html,
        cssCode: combined.css,
      };
    });
  }, [updateProject]);

  // ---------------- navigation / selection ----------------
  const handleOpenNewProjectView = () => {
    setView("new-project");
  };

  const handleCreateProject = (name, templateOrNull) => {
    const newProject = createNewProject(name, templateOrNull || undefined);
    setProjects((prev) => [newProject, ...prev]);
    setSelectedProjectId(newProject.id);
    setView("editor");
  };

  const handleCancelCreateProject = () => {
    setView("dashboard");
  };

  const handleOpenProject = (id) => {
    setSelectedProjectId(id);
    setView("editor");
  };

  const handleBackToDashboard = () => {
    setView("dashboard");
  };

  // ---------------- project-level handlers ----------------
  const handleRenameProject = (newName) => {
    if (!selectedProject) return;
    updateProject(selectedProject.id, { name: newName });
  };

  const handleSaveProject = () => {
    if (!selectedProject) return;
    // At this point, state is already updated + localStorage effect will run.
    console.log("Saving project:", selectedProject);
    alert("Project saved ✅");
  };

  const handlePublishProject = () => {
    if (!selectedProject) return;
    const newSlug = selectedProject.slug || slugify(selectedProject.name);
    updateProject(selectedProject.id, {
      isPublished: true,
      slug: newSlug,
    });
    alert(`Published! Example URL: https://yourdomain.com/site/${newSlug}`);
  };

  // ---------------- section helpers & handlers ----------------
  const handleUpdateSectionHtml = (sectionId, html) => {
    if (!selectedProject) return;
    updateProjectSections(selectedProject.id, (sections) =>
      sections.map((s) => (s.id === sectionId ? { ...s, html } : s))
    );
  };

  const handleUpdateSectionCss = (sectionId, css) => {
    if (!selectedProject) return;
    updateProjectSections(selectedProject.id, (sections) =>
      sections.map((s) => (s.id === sectionId ? { ...s, css } : s))
    );
  };

  const handleReorderSections = (fromIndex, toIndex) => {
    if (!selectedProject) return;
    const sections = [...(selectedProject.sections || [])];
    if (
      toIndex < 0 ||
      toIndex >= sections.length ||
      fromIndex === toIndex
    ) {
      return;
    }

    const [moved] = sections.splice(fromIndex, 1);
    sections.splice(toIndex, 0, moved);

    updateProjectSections(selectedProject.id, sections);
  };

  const handleAddSection = () => {
    if (!selectedProject) return null;

    const sections = selectedProject.sections || [];
    const newSection = createBlankSection(
      `Section ${sections.length + 1}`,
      sections.length
    );
    const newSections = [...sections, newSection];

    updateProjectSections(selectedProject.id, newSections);
    return newSection.id;
  };

  // ---------------- image handlers ----------------
  const handleUploadImages = (fileList) => {
    if (!selectedProject || !fileList || fileList.length === 0) return;

    const currentImages = selectedProject.images || [];
    const newImages = Array.from(fileList).map((file) => ({
      id: "img-" + Date.now() + "-" + file.name,
      name: file.name,
      url: URL.createObjectURL(file), // frontend-only
    }));

    updateProject(selectedProject.id, {
      images: [...currentImages, ...newImages],
    });
  };

  const handleInsertImageIntoSection = (sectionId, imageUrl) => {
    if (!selectedProject) return;
    updateProjectSections(selectedProject.id, (sections) =>
      sections.map((s) => {
        if (s.id !== sectionId) return s;
        const imgTag = `\n<figure class="wb-img"><img src="${imageUrl}" alt="" /></figure>`;
        return { ...s, html: (s.html || "") + imgTag };
      })
    );
  };

  const handleRemoveImage = (imageId) => {
    if (!selectedProject) return;
    updateProject(selectedProject.id, (project) => ({
      images: (project.images || []).filter((img) => img.id !== imageId),
    }));
  };

  // ---------------- render ----------------
  return (
    <div className="app-shell">
      <TopBar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {view === "dashboard" && (
          <ProjectList
            projects={projects}
            onCreateProject={handleOpenNewProjectView}
            onOpenProject={handleOpenProject}
          />
        )}

        {view === "new-project" && (
          <NewProjectView
            templates={templates}
            onCreate={handleCreateProject}
            onCancel={handleCancelCreateProject}
          />
        )}

        {view === "editor" && (
          <EditorLayout
            project={selectedProject}
            onBack={handleBackToDashboard}
            onChangeName={handleRenameProject}
            onSave={handleSaveProject}
            onPublish={handlePublishProject}
            onUpdateSectionHtml={handleUpdateSectionHtml}
            onUpdateSectionCss={handleUpdateSectionCss}
            onReorderSections={handleReorderSections}
            onAddSection={handleAddSection}
            onUploadImages={handleUploadImages}
            onInsertImageIntoSection={handleInsertImageIntoSection}
            onRemoveImage={handleRemoveImage}
          />
        )}
      </div>
    </div>
  );
}
