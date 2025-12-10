// src/components/editor/EditorLayout.jsx
import React, { useState, useMemo, useEffect } from "react";
import HtmlEditor from "./HtmlEditor";
import CssEditor from "./CssEditor";
import PreviewPane from "./PreviewPane";
import SectionList from "./SectionList";
import ImagePanel from "./ImagePanel";

export default function EditorLayout({
  project,
  onBack,
  onChangeName,
  onSave,
  onPublish,
  onUpdateSectionHtml,
  onUpdateSectionCss,
  onReorderSections,
  onAddSection,
  onUploadImages,
  onInsertImageIntoSection,
  onRemoveImage,
}) {
  const [selectedSectionId, setSelectedSectionId] = useState(
    project?.sections?.[0]?.id || null
  );

  // Keep selected section valid when project changes
  useEffect(() => {
    if (!project) {
      setSelectedSectionId(null);
      return;
    }

    if (project.sections && project.sections.length > 0) {
      if (!project.sections.find((s) => s.id === selectedSectionId)) {
        setSelectedSectionId(project.sections[0].id);
      }
    } else {
      setSelectedSectionId(null);
    }
  }, [project, selectedSectionId]);

  const selectedSection = useMemo(
    () =>
      project?.sections?.find((s) => s.id === selectedSectionId) || null,
    [project, selectedSectionId]
  );

  // 🔹 Keyboard shortcut: Ctrl+S / Cmd+S to save
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      if (isCtrlOrCmd && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        onSave();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSave]);

  if (!project) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          color: "#9ca3af",
        }}
      >
        No project selected.
      </div>
    );
  }

  const handleNameChange = (e) => onChangeName(e.target.value);

  const handleMoveUp = (index) => {
    onReorderSections(index, index - 1);
  };

  const handleMoveDown = (index) => {
    onReorderSections(index, index + 1);
  };

  const handleAddSectionClick = () => {
    const newId = onAddSection();
    if (newId) {
      setSelectedSectionId(newId);
      return;
    }

    // fallback: keep current selection if no new id returned
  };

  const handleInsertImage = (imageUrl) => {
    if (!selectedSection) return;
    onInsertImageIntoSection(selectedSection.id, imageUrl);
  };

  return (
    <main className="editor-layout">
      <div className="editor-toolbar">
        <div className="editor-toolbar-left">
          <button className="btn btn-outline" onClick={onBack}>
            ← Back
          </button>
          <input
            className="editor-name-input"
            value={project.name || ""}
            onChange={handleNameChange}
            placeholder="Project name"
          />
        </div>
        <div className="editor-toolbar-right">
          <button className="btn btn-outline" onClick={onSave}>
            Save
          </button>
          <button className="btn btn-primary" onClick={onPublish}>
            {project.isPublished ? "Update Publish" : "Publish"}
          </button>
        </div>
      </div>

      <div className="editor-main">
        {/* LEFT: sections + section HTML/CSS */}
        <div className="editor-left">
          <SectionList
            sections={project.sections}
            selectedSectionId={selectedSectionId}
            onSelectSection={setSelectedSectionId}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onAddSection={handleAddSectionClick}
          />

          <div className="editor-left-inner">
            {selectedSection ? (
              <>
                <HtmlEditor
                  value={selectedSection.html}
                  onChange={(val) =>
                    onUpdateSectionHtml(selectedSection.id, val)
                  }
                />
                <CssEditor
                  value={selectedSection.css}
                  onChange={(val) =>
                    onUpdateSectionCss(selectedSection.id, val)
                  }
                />
              </>
            ) : (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  color: "#9ca3af",
                }}
              >
                No section selected.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: full preview + images */}
        <div className="editor-right">
          <div className="editor-right-inner">
            <PreviewPane sections={project.sections} />
            <ImagePanel
              images={project.images}
              onUploadImages={onUploadImages}
              onInsertImage={handleInsertImage}
              onRemoveImage={onRemoveImage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
