// src/components/dashboard/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project, onOpen }) {
  const dateLabel = new Date(
    project.updatedAt || project.createdAt
  ).toLocaleString();

  return (
    <div className="project-card">
      <div>
        <div className="project-card-header">
          <h2 className="project-name">{project.name}</h2>
          <span
            className={
              "project-badge" + (project.isPublished ? " published" : "")
            }
          >
            {project.isPublished ? "Published" : "Draft"}
          </span>
        </div>
        <p className="project-card-description">
          Simple HTML/CSS website. Last updated: {dateLabel}
        </p>
      </div>

      <div className="project-card-footer">
        <button className="btn btn-outline" onClick={onOpen}>
          Edit
        </button>
        {project.isPublished && project.slug && (
          <a href={`#site/${project.slug}`} className="project-link">
            View (mock)
          </a>
        )}
      </div>
    </div>
  );
}
