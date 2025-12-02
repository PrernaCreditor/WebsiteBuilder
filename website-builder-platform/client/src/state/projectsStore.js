// src/state/projectsStore.js
import { templates } from "../utils/templates";

function combineSections(sections) {
  const html = (sections || []).map((s) => s.html).join("\n\n");
  const css = (sections || []).map((s) => s.css).join("\n\n");
  return { html, css };
}

export function createInitialProjects() {
  const now = new Date().toISOString();
  const template = templates[0];
  const sectionsCopy = template.sections.map((s) => ({ ...s }));
  const combined = combineSections(sectionsCopy);

  return [
    {
      id: "project-1",
      name: template.name,
      sections: sectionsCopy,
      htmlCode: combined.html,
      cssCode: combined.css,
      images: [],
      isPublished: false,
      slug: null,
      createdAt: now,
      updatedAt: now,
    },
  ];
}

export function createNewProject(name, template) {
  const now = new Date().toISOString();

  if (template) {
    const sectionsCopy = template.sections.map((s) => ({
      ...s,
      id: s.id + "-" + Date.now(),
    }));
    const combined = combineSections(sectionsCopy);
    return {
      id: "project-" + Date.now(),
      name,
      sections: sectionsCopy,
      htmlCode: combined.html,
      cssCode: combined.css,
      images: [],
      isPublished: false,
      slug: null,
      createdAt: now,
      updatedAt: now,
    };
  }

  // blank project with simple one section
  const sections = [
    {
      id: "section-" + Date.now(),
      name: "Section 1",
      html: `<section>
  <h1>${name}</h1>
  <p>Start editing this section.</p>
</section>`,
      css: `section {
  padding: 2rem;
  background: #020617;
  color: #e5e7eb;
}`,
    },
  ];
  const combined = combineSections(sections);

  return {
    id: "project-" + Date.now(),
    name,
    sections,
    htmlCode: combined.html,
    cssCode: combined.css,
    images: [],
    isPublished: false,
    slug: null,
    createdAt: now,
    updatedAt: now,
  };
}
