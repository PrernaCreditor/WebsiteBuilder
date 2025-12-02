// src/components/editor/CssEditor.jsx
import React from "react";

export default function CssEditor({ value, onChange }) {
  return (
    <div className="code-panel">
      <div className="code-panel-header">
        <span className="code-panel-title">CSS</span>
        <span className="code-panel-subtitle">Section CSS</span>
      </div>
      <textarea
        className="code-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
}
