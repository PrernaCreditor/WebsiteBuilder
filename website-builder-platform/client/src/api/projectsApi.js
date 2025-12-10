const STORAGE_KEY = "website-builder-projects-v1";

/**
 * Thin persistence layer for projects.
 * TODO: Replace with real HTTP calls to backend (/projects, /projects/:id).
 */
export function loadProjects(fallbackFactory) {
  if (typeof localStorage === "undefined") {
    return fallbackFactory ? fallbackFactory() : [];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallbackFactory ? fallbackFactory() : [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return fallbackFactory ? fallbackFactory() : [];
    }
    return parsed;
  } catch (err) {
    console.error("Failed to load projects from storage", err);
    return fallbackFactory ? fallbackFactory() : [];
  }
}

export function saveProjects(projects) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error("Failed to save projects to storage", err);
  }
}

export function clearProjects() {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
