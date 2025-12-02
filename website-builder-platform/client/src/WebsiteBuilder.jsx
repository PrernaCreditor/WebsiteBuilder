// src/WebsiteBuilder.jsx
import React, { useState, useMemo, useEffect } from "react";
import TopBar from "./components/layout/TopBar";
import ProjectList from "./components/dashboard/ProjectList";
import EditorLayout from "./components/editor/EditorLayout";
import NewProjectView from "./components/dashboard/NewProjectView";
import {
  createInitialProjects,
  createNewProject,
} from "./state/projectsStore";
import { slugify } from "./utils/generateSlug";
import { templates } from "./utils/templates";

const STORAGE_KEY = "website-builder-projects-v1";

// Load projects from localStorage, or fall back to initial template project
function loadInitialProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialProjects();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return createInitialProjects();
    }
    return parsed;
  } catch (err) {
    console.error("Failed to load projects from storage", err);
    return createInitialProjects();
  }
}

function createBlankSection(name, index) {
  return {
    id: "section-" + Date.now() + "-" + index,
    name: name || `Section ${index + 1}`,
    html: `<section>
  <h2>${name || `Section ${index + 1}`}</h2>
  <p>Edit this section content.</p>
</section>`,
    css: `section {
  padding: 2rem;
  background: #020617;
  color: #e5e7eb;
}`,
  };
}

// Only computed once when the module loads
const initialProjects = loadInitialProjects();

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
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {
      console.error("Failed to save projects to storage", err);
    }
  }, [projects]);

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

  const updateProject = (id, data) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, ...data, updatedAt: new Date().toISOString() } : p
      )
    );
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
  const recomputePageFromSections = (sections) => {
    const htmlCombined = sections.map((s) => s.html).join("\n\n");
    const cssCombined = sections.map((s) => s.css).join("\n\n");
    return { htmlCombined, cssCombined };
  };

  const handleUpdateSectionHtml = (sectionId, html) => {
    if (!selectedProject) return;
    const newSections = selectedProject.sections.map((s) =>
      s.id === sectionId ? { ...s, html } : s
    );

    const { htmlCombined, cssCombined } = recomputePageFromSections(newSections);

    updateProject(selectedProject.id, {
      sections: newSections,
      htmlCode: htmlCombined,
      cssCode: cssCombined,
    });
  };

  const handleUpdateSectionCss = (sectionId, css) => {
    if (!selectedProject) return;
    const newSections = selectedProject.sections.map((s) =>
      s.id === sectionId ? { ...s, css } : s
    );

    const { htmlCombined, cssCombined } = recomputePageFromSections(newSections);

    updateProject(selectedProject.id, {
      sections: newSections,
      htmlCode: htmlCombined,
      cssCode: cssCombined,
    });
  };

  const handleReorderSections = (fromIndex, toIndex) => {
    if (!selectedProject) return;
    const sections = [...selectedProject.sections];
    if (
      toIndex < 0 ||
      toIndex >= sections.length ||
      fromIndex === toIndex
    ) {
      return;
    }

    const [moved] = sections.splice(fromIndex, 1);
    sections.splice(toIndex, 0, moved);

    const { htmlCombined, cssCombined } = recomputePageFromSections(sections);

    updateProject(selectedProject.id, {
      sections,
      htmlCode: htmlCombined,
      cssCode: cssCombined,
    });
  };

  const handleAddSection = () => {
    if (!selectedProject) return;

    const sections = selectedProject.sections || [];
    const newSection = createBlankSection(
      `Section ${sections.length + 1}`,
      sections.length
    );
    const newSections = [...sections, newSection];

    const { htmlCombined, cssCombined } = recomputePageFromSections(newSections);

    updateProject(selectedProject.id, {
      sections: newSections,
      htmlCode: htmlCombined,
      cssCode: cssCombined,
    });
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
    const newSections = selectedProject.sections.map((s) => {
      if (s.id !== sectionId) return s;
      const imgTag = `\n<img src="${imageUrl}" alt="" />`;
      return { ...s, html: (s.html || "") + imgTag };
    });

    const { htmlCombined, cssCombined } = recomputePageFromSections(newSections);

    updateProject(selectedProject.id, {
      sections: newSections,
      htmlCode: htmlCombined,
      cssCode: cssCombined,
    });
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
          />
        )}
      </div>
    </div>
  );
}
