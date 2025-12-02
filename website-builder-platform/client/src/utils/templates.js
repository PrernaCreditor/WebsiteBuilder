// src/utils/templates.js
export const templates = [
  {
    id: "landing-page",
    name: "Landing Page",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        html: `
<section class="hero">
  <h1>Welcome to My Website</h1>
  <p>This is a simple hero section from the Landing Page template.</p>
  <a class="hero-btn" href="#cta">Get Started</a>
</section>
        `.trim(),
        css: `
.hero {
  padding: 4rem 2rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 720px;
  margin: 0 auto;
  color: #e5e7eb;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #38bdf8;
}
.hero p {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}
.hero-btn {
  display: inline-flex;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  background: #38bdf8;
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
}
.hero-btn:hover {
  background: #0ea5e9;
}
        `.trim(),
      },
      {
        id: "features",
        name: "Features",
        html: `
<section class="features">
  <h2>Features</h2>
  <div class="feature-grid">
    <div class="feature-card">Fast setup</div>
    <div class="feature-card">Simple editor</div>
    <div class="feature-card">Live preview</div>
  </div>
</section>
        `.trim(),
        css: `
.features {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.features h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.feature-grid {
  display: grid;
  gap: 1rem;
}
@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.feature-card {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #1f2937;
  background: #020617;
}
        `.trim(),
      },
      {
        id: "footer",
        name: "Footer",
        html: `
<footer class="footer">
  <p>© 2025 My Website. Built with your builder.</p>
</footer>
        `.trim(),
        css: `
.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #9ca3af;
  border-top: 1px solid #1f2937;
  margin-top: 3rem;
}
        `.trim(),
      },
    ],
  },

  {
    id: "portfolio",
    name: "Portfolio",
    sections: [
      {
        id: "portfolio-hero",
        name: "Portfolio Hero",
        html: `
<section class="hero">
  <h1>Hi, I'm Alex</h1>
  <p>I build clean UI and simple web tools.</p>
</section>
        `.trim(),
        css: `
.hero {
  padding: 4rem 2rem;
  min-height: 40vh;
  max-width: 720px;
  margin: 0 auto;
  color: #e5e7eb;
}
.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 0.75rem;
  color: #a855f7;
}
.hero p {
  font-size: 1rem;
  color: #e5e7eb;
}
        `.trim(),
      },
      {
        id: "projects",
        name: "Projects",
        html: `
<section class="projects">
  <h2>Projects</h2>
  <div class="projects-grid">
    <article class="project-card">
      <h3>Project One</h3>
      <p>A short description of your project.</p>
    </article>
    <article class="project-card">
      <h3>Project Two</h3>
      <p>Another short description goes here.</p>
    </article>
  </div>
</section>
        `.trim(),
        css: `
.projects {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.projects h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.projects-grid {
  display: grid;
  gap: 1rem;
}
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.project-card {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #1f2937;
  background: #020617;
}
.project-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.project-card p {
  font-size: 0.9rem;
  color: #d1d5db;
}
        `.trim(),
      },
      {
        id: "contact",
        name: "Contact",
        html: `
<section class="contact">
  <h2>Contact</h2>
  <p>Email: you@example.com</p>
</section>
        `.trim(),
        css: `
.contact {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;
}
.contact h2 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}
.contact p {
  font-size: 0.95rem;
  color: #e5e7eb;
}
        `.trim(),
      },
    ],
  },
];
