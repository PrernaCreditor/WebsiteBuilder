// src/components/dashboard/ProjectList.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onCreateProject, onOpenProject }) {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-header-title">Your Websites</h1>
          <p className="dashboard-header-subtitle">
            Create and manage simple HTML/CSS websites.
          </p>
        </div>
        <button className="btn btn-primary" onClick={onCreateProject}>
          + New Website
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <p style={{ marginBottom: 8, fontSize: 13 }}>No websites yet.</p>
          <button
            className="btn btn-ghost"
            style={{ fontSize: 13 }}
            onClick={onCreateProject}
          >
            Create your first website
          </button>
        </div>
      ) : (
        <div className="dashboard-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => onOpenProject(project.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
