// src/components/editor/SectionList.jsx
import React from "react";

export default function SectionList({
  sections,
  selectedSectionId,
  onSelectSection,
  onMoveUp,
  onMoveDown,
  onAddSection,
}) {
  return (
    <div className="section-list">
      <div className="section-list-header">
        <span className="section-list-title">Sections</span>
        <button className="btn btn-outline section-add-btn" onClick={onAddSection}>
          + Add
        </button>
      </div>
      <div className="section-list-body">
        {sections.map((section, index) => {
          const isSelected = section.id === selectedSectionId;
          return (
            <div
              key={section.id}
              className={
                "section-item" + (isSelected ? " section-item-selected" : "")
              }
              onClick={() => onSelectSection(section.id)}
            >
              <div className="section-item-main">
                <span className="section-item-name">{section.name}</span>
                <span className="section-item-index">#{index + 1}</span>
              </div>
              <div className="section-item-actions">
                <button
                  className="btn btn-outline section-move-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoveUp(index);
                  }}
                  disabled={index === 0}
                >
                  ↑
                </button>
                <button
                  className="btn btn-outline section-move-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoveDown(index);
                  }}
                  disabled={index === sections.length - 1}
                >
                  ↓
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
