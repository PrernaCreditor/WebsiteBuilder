// src/components/editor/HtmlEditor.jsx
import React from "react";

export default function HtmlEditor({ value, onChange }) {
  return (
    <div className="code-panel">
      <div className="code-panel-header">
        <span className="code-panel-title">HTML</span>
        <span className="code-panel-subtitle">Section HTML</span>
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
