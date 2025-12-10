// src/state/projectsStore.js
import { templates } from "../utils/templates";

const randomId = (prefix) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(16)
    .slice(2, 8)}`;

export function combineSections(sections = []) {
  const html = sections.map((s) => s.html || "").join("\n\n");
  const css = sections.map((s) => s.css || "").join("\n\n");
  return { html, css };
}

export function createBlankSection(name, index = 0) {
  const title = name || `Section ${index + 1}`;
  return {
    id: randomId("section"),
    name: title,
    html: `<section class="blank-section">
  <h2>${title}</h2>
  <p>Edit this section content.</p>
</section>`,
    css: `.blank-section {
  padding: 2rem;
  background: #020617;
  color: #e5e7eb;
  border: 1px dashed #1f2937;
  border-radius: 12px;
  max-width: 960px;
  margin: 0 auto;
}`,
  };
}

export function createProjectFromTemplate(name, template) {
  const now = new Date().toISOString();
  const sectionsCopy = (template.sections || []).map((s, index) => ({
    ...s,
    id: s.id || randomId(`section-${index}`),
  }));
  const combined = combineSections(sectionsCopy);

  return {
    id: randomId("project"),
    name: name || template.name,
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

export function createInitialProjects() {
  const template = templates[0];
  return [createProjectFromTemplate(template.name, template)];
}

export function createNewProject(name, template) {
  const now = new Date().toISOString();

  if (template) {
    return createProjectFromTemplate(name, template);
  }

  const sections = [createBlankSection(name || "Section 1", 0)];
  const combined = combineSections(sections);

  return {
    id: randomId("project"),
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
