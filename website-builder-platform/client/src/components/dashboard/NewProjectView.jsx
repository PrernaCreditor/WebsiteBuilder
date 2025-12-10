// src/components/dashboard/NewProjectView.jsx
import React, { useState } from "react";

export default function NewProjectView({ templates, onCreate, onCancel }) {
  const [name, setName] = useState("");
  const [selectedId, setSelectedId] = useState("blank"); // "blank" or template.id

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a project name.");
      return;
    }
    const template =
      selectedId === "blank"
        ? null
        : templates.find((t) => t.id === selectedId) || null;

    onCreate(name.trim(), template);
  };

  return (
    <main className="newproject-wrapper">
      <div className="newproject-card">
        <div className="newproject-header">
          <h1 className="newproject-title">Create a Website</h1>
          <p className="newproject-subtitle">
            Choose a template to start from, or use a blank layout.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="newproject-form">
          <div className="newproject-field">
            <label className="newproject-label">Website name</label>
            <input
              className="newproject-input"
              placeholder="My portfolio, Landing page..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="newproject-field">
            <label className="newproject-label">Start from</label>

            <div className="newproject-grid">
              {/* Blank layout card */}
              <button
                type="button"
                className={
                  "template-card" +
                  (selectedId === "blank" ? " template-card-selected" : "")
                }
                onClick={() => setSelectedId("blank")}
              >
                <div className="template-chip">Blank</div>
                <h3 className="template-title">Blank layout</h3>
                <p className="template-desc">
                  Start with an empty page. Add your own sections and design
                  from scratch.
                </p>
              </button>

              {/* Template cards */}
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  type="button"
                  className={
                    "template-card" +
                    (selectedId === tpl.id ? " template-card-selected" : "")
                  }
                  onClick={() => setSelectedId(tpl.id)}
                >
                  <div className="template-chip">{tpl.name}</div>
                  <h3 className="template-title">{tpl.name}</h3>
                  <p className="template-desc">
                    Pre-built sections you can customize with HTML and CSS.
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="newproject-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!name.trim()}
            >
              Create website
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
