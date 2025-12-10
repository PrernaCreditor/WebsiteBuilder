// src/utils/templates.js
export const templates = [
  {
    id: "landing-page",
    name: "Landing Page",
    sections: [
      {
        id: "landing-nav",
        name: "Navigation",
        html: `
<header class="nav">
  <div class="nav-brand">Nova</div>
  <nav class="nav-links">
    <a href="#features">Features</a>
    <a href="#cta">Get started</a>
  </nav>
  <button class="nav-cta">Sign up</button>
</header>
        `.trim(),
        css: `
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1f2937;
}
.nav-brand {
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #38bdf8;
}
.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
}
.nav-links a:hover {
  color: #e5e7eb;
}
.nav-cta {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 640px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    justify-content: flex-start;
  }
}
        `.trim(),
      },
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
        id: "portfolio-nav",
        name: "Navigation",
        html: `
<header class="nav">
  <div class="nav-brand">Portfolio</div>
  <nav class="nav-links">
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  <button class="nav-cta">Hire me</button>
</header>
        `.trim(),
        css: `
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1f2937;
}
.nav-brand {
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #a855f7;
}
.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
}
.nav-links a:hover {
  color: #e5e7eb;
}
.nav-cta {
  background: #a855f7;
  color: #0f172a;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 640px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    justify-content: flex-start;
  }
}
        `.trim(),
      },
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
      {
        id: "portfolio-footer",
        name: "Footer",
        html: `
<footer class="footer">
  <p>© 2025 Portfolio. All rights reserved.</p>
</footer>
        `.trim(),
        css: `
.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
  border-top: 1px solid #1f2937;
  margin-top: 3rem;
}
        `.trim(),
      },
    ],
  },

  {
    id: "e-learning",
    name: "E-learning",
    sections: [
      {
        id: "elearning-nav",
        name: "Navigation",
        html: `
<header class="nav">
  <div class="nav-brand">Learnly</div>
  <nav class="nav-links">
    <a href="#courses">Tracks</a>
    <a href="#community">Community</a>
  </nav>
  <button class="nav-cta">Enroll</button>
</header>
        `.trim(),
        css: `
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1f2937;
}
.nav-brand {
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #38bdf8;
}
.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
}
.nav-links a:hover {
  color: #e5e7eb;
}
.nav-cta {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 640px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    justify-content: flex-start;
  }
}
        `.trim(),
      },
      {
        id: "elearning-hero",
        name: "Hero",
        html: `
<section class="el-hero">
  <div class="el-hero-content">
    <p class="eyebrow">Online Academy</p>
    <h1>Learn modern skills, level up faster.</h1>
    <p class="lead">
      Bite-sized lessons, community support, and real projects to build a portfolio.
    </p>
    <div class="el-hero-actions">
      <a href="#courses" class="btn-primary">Browse courses</a>
      <a href="#community" class="btn-ghost">Join community</a>
    </div>
    <div class="el-hero-metrics">
      <div><strong>120+</strong><span>Lessons</span></div>
      <div><strong>35</strong><span>Mentors</span></div>
      <div><strong>15k</strong><span>Students</span></div>
    </div>
  </div>
</section>
        `.trim(),
        css: `
.el-hero {
  padding: 4rem 2rem 3rem;
  max-width: 1100px;
  margin: 0 auto;
}
.el-hero-content h1 {
  font-size: 2.6rem;
  margin: 0.75rem 0;
  color: #38bdf8;
}
.el-hero-content .lead {
  max-width: 720px;
  color: #cbd5e1;
  font-size: 1rem;
}
.el-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.btn-primary {
  background: #38bdf8;
  color: #0f172a;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
}
.btn-primary:hover {
  background: #0ea5e9;
}
.btn-ghost {
  border: 1px solid #1f2937;
  padding: 0.75rem 1.3rem;
  border-radius: 999px;
  color: #e5e7eb;
  text-decoration: none;
}
.el-hero-metrics {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
.el-hero-metrics div {
  background: #0b1224;
  border: 1px solid #1f2937;
  border-radius: 0.75rem;
  padding: 1rem;
  display: grid;
  gap: 0.35rem;
}
.el-hero-metrics strong {
  font-size: 1.3rem;
  color: #a855f7;
}
.eyebrow {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  font-size: 0.8rem;
}
        `.trim(),
      },
      {
        id: "elearning-curriculum",
        name: "Curriculum",
        html: `
<section class="el-curriculum" id="courses">
  <h2>Popular tracks</h2>
  <div class="el-track-grid">
    <article class="el-track">
      <h3>Frontend Foundations</h3>
      <p>HTML, CSS, JS, accessibility, responsive design.</p>
      <span class="pill">8 weeks</span>
    </article>
    <article class="el-track">
      <h3>Full-stack Essentials</h3>
      <p>APIs with Node.js, databases, auth basics.</p>
      <span class="pill">10 weeks</span>
    </article>
    <article class="el-track">
      <h3>Product Design</h3>
      <p>UX flows, UI patterns, prototyping, usability.</p>
      <span class="pill">6 weeks</span>
    </article>
  </div>
</section>
        `.trim(),
        css: `
.el-curriculum {
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
.el-curriculum h2 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
}
.el-track-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.el-track {
  background: #0b1224;
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 1.25rem;
}
.el-track h3 {
  margin: 0 0 0.4rem;
}
.el-track p {
  color: #cbd5e1;
  font-size: 0.95rem;
}
.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: #111827;
  border: 1px solid #1f2937;
  color: #a855f7;
  font-size: 0.85rem;
  margin-top: 0.6rem;
}
        `.trim(),
      },
      {
        id: "elearning-testimonials",
        name: "Testimonials",
        html: `
<section class="el-testimonials">
  <h2>Learner stories</h2>
  <div class="el-testimonial-grid">
    <article class="el-quote">
      <p>“I shipped my first client project after 6 weeks. The hands-on tasks were gold.”</p>
      <span>- Priya, Frontend dev</span>
    </article>
    <article class="el-quote">
      <p>“Great mentors and clear feedback loops. The community kept me accountable.”</p>
      <span>- Miguel, Product designer</span>
    </article>
  </div>
</section>
        `.trim(),
        css: `
.el-testimonials {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.el-testimonials h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.el-testimonial-grid {
  display: grid;
  gap: 1rem;
}
.el-quote {
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 1.25rem;
  background: radial-gradient(circle at 20% 20%, #0f172a, #020617);
}
.el-quote p {
  margin: 0 0 0.5rem;
  color: #e2e8f0;
}
.el-quote span {
  color: #94a3b8;
  font-size: 0.9rem;
}
        `.trim(),
      },
      {
        id: "elearning-cta",
        name: "CTA",
        html: `
<section class="el-cta" id="community">
  <div class="el-cta-card">
    <h3>Ready to start?</h3>
    <p>Join live cohorts, meet mentors, and get feedback on your work.</p>
    <a class="btn-primary" href="#start">Start learning</a>
  </div>
</section>
        `.trim(),
        css: `
.el-cta {
  padding: 3rem 2rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}
.el-cta-card {
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: #0b1224;
  border-radius: 16px;
  padding: 2rem;
  text-align: left;
}
.el-cta-card h3 {
  margin: 0 0 0.5rem;
  color: #0b1224;
}
.el-cta-card p {
  margin: 0 0 1rem;
}
.el-cta-card .btn-primary {
  background: #0b1224;
  color: #e0f2fe;
}
.el-cta-card .btn-primary:hover {
  background: #020617;
}
        `.trim(),
      },
      {
        id: "elearning-footer",
        name: "Footer",
        html: `
<footer class="footer">
  <p>© 2025 Learnly Academy. Keep building.</p>
</footer>
        `.trim(),
        css: `
.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
  border-top: 1px solid #1f2937;
  margin-top: 3rem;
}
        `.trim(),
      },
    ],
  },

  {
    id: "real-estate",
    name: "Real Estate",
    sections: [
      {
        id: "realestate-nav",
        name: "Navigation",
        html: `
<header class="nav">
  <div class="nav-brand">Modern Realty</div>
  <nav class="nav-links">
    <a href="#listings">Listings</a>
    <a href="#contact">Contact</a>
  </nav>
  <button class="nav-cta">Book a tour</button>
</header>
        `.trim(),
        css: `
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1f2937;
}
.nav-brand {
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #38bdf8;
}
.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
}
.nav-links a:hover {
  color: #e5e7eb;
}
.nav-cta {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 640px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    justify-content: flex-start;
  }
}
        `.trim(),
      },
      {
        id: "realestate-hero",
        name: "Hero",
        html: `
<section class="re-hero">
  <div>
    <p class="eyebrow">Modern Realty</p>
    <h1>Find a place you love to live.</h1>
    <p class="lead">Curated listings, virtual tours, and expert agents to guide you.</p>
    <div class="re-actions">
      <a class="btn-primary" href="#listings">View listings</a>
      <a class="btn-ghost" href="#contact">Talk to an agent</a>
    </div>
  </div>
  <div class="re-hero-card">
    <div class="re-stat">
      <strong>250+</strong>
      <span>Active listings</span>
    </div>
    <div class="re-stat">
      <strong>4.9★</strong>
      <span>Client rating</span>
    </div>
  </div>
</section>
        `.trim(),
        css: `
.re-hero {
  padding: 4rem 2rem 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
}
.re-hero h1 {
  color: #38bdf8;
  font-size: 2.4rem;
  margin: 0.5rem 0;
}
.re-hero .lead {
  color: #cbd5e1;
  max-width: 640px;
}
.re-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.2rem;
}
.re-hero-card {
  border: 1px solid #1f2937;
  background: #0b1224;
  border-radius: 16px;
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
}
.re-stat strong {
  display: block;
  color: #a855f7;
  font-size: 1.6rem;
}
.re-stat span {
  color: #94a3b8;
}
        `.trim(),
      },
      {
        id: "realestate-listings",
        name: "Listings",
        html: `
<section class="re-listings" id="listings">
  <h2>Featured listings</h2>
  <div class="re-card-grid">
    <article class="re-card">
      <div class="re-img placeholder">Image</div>
      <div class="re-card-body">
        <h3>Lakeview Townhouse</h3>
        <p>3 bed · 2.5 bath · 1,850 sqft</p>
        <div class="re-price">$620,000</div>
      </div>
    </article>
    <article class="re-card">
      <div class="re-img placeholder">Image</div>
      <div class="re-card-body">
        <h3>Downtown Loft</h3>
        <p>2 bed · 2 bath · 1,400 sqft</p>
        <div class="re-price">$540,000</div>
      </div>
    </article>
    <article class="re-card">
      <div class="re-img placeholder">Image</div>
      <div class="re-card-body">
        <h3>Suburban Retreat</h3>
        <p>4 bed · 3 bath · 2,300 sqft</p>
        <div class="re-price">$710,000</div>
      </div>
    </article>
  </div>
</section>
        `.trim(),
        css: `
.re-listings {
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
.re-listings h2 {
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
}
.re-card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.re-card {
  background: #0b1224;
  border: 1px solid #1f2937;
  border-radius: 14px;
  overflow: hidden;
}
.re-img {
  height: 160px;
  background: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.9rem;
}
.re-card-body {
  padding: 1rem;
}
.re-price {
  margin-top: 0.5rem;
  color: #38bdf8;
  font-weight: 700;
}
        `.trim(),
      },
      {
        id: "realestate-testimonials",
        name: "Testimonials",
        html: `
<section class="re-testimonials">
  <h2>Client stories</h2>
  <div class="re-quote-grid">
    <article class="re-quote">
      <p>“They guided us through every step. We found our home in 3 weeks.”</p>
      <span>- Taylor & Sam</span>
    </article>
    <article class="re-quote">
      <p>“Smart virtual tours saved us hours. Transparent and responsive team.”</p>
      <span>- Jordan P.</span>
    </article>
  </div>
</section>
        `.trim(),
        css: `
.re-testimonials {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.re-testimonials h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.re-quote-grid {
  display: grid;
  gap: 1rem;
}
.re-quote {
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 1.2rem;
  background: radial-gradient(circle at 30% 20%, #0f172a, #020617);
}
.re-quote p {
  margin: 0 0 0.5rem;
}
.re-quote span {
  color: #94a3b8;
}
        `.trim(),
      },
      {
        id: "realestate-contact",
        name: "Contact",
        html: `
<section class="re-contact" id="contact">
  <div class="re-contact-card">
    <h3>Talk to an agent</h3>
    <p>We schedule viewings, virtual tours, and help with financing.</p>
    <a class="btn-primary" href="mailto:agent@example.com">Book a call</a>
  </div>
</section>
        `.trim(),
        css: `
.re-contact {
  padding: 3rem 2rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}
.re-contact-card {
  border-radius: 14px;
  border: 1px solid #1f2937;
  background: linear-gradient(135deg, #111827, #0b1224);
  padding: 1.75rem;
}
.re-contact-card h3 {
  margin: 0 0 0.5rem;
}
.re-contact-card p {
  margin: 0 0 1rem;
  color: #cbd5e1;
}
        `.trim(),
      },
      {
        id: "realestate-footer",
        name: "Footer",
        html: `
<footer class="footer">
  <p>© 2025 Modern Realty. Find your next home.</p>
</footer>
        `.trim(),
        css: `
.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
  border-top: 1px solid #1f2937;
  margin-top: 3rem;
}
        `.trim(),
      },
    ],
  },

  {
    id: "business-consulting",
    name: "Business Consulting",
    sections: [
      {
        id: "consulting-nav",
        name: "Navigation",
        html: `
<header class="nav">
  <div class="nav-brand">Northbeam</div>
  <nav class="nav-links">
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
  <button class="nav-cta">Book consult</button>
</header>
        `.trim(),
        css: `
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1f2937;
}
.nav-brand {
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #38bdf8;
}
.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
}
.nav-links a:hover {
  color: #e5e7eb;
}
.nav-cta {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 640px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    justify-content: flex-start;
  }
}
        `.trim(),
      },
      {
        id: "consulting-hero",
        name: "Hero",
        html: `
<section class="bc-hero">
  <div>
    <p class="eyebrow">Strategy & Ops</p>
    <h1>We help teams ship faster and scale smarter.</h1>
    <p class="lead">Roadmaps, processes, and analytics tailored to your stage.</p>
    <div class="bc-actions">
      <a class="btn-primary" href="#services">Our services</a>
      <a class="btn-ghost" href="#contact">Book a consult</a>
    </div>
  </div>
</section>
        `.trim(),
        css: `
.bc-hero {
  padding: 4rem 2rem 2.5rem;
  max-width: 1000px;
  margin: 0 auto;
}
.bc-hero h1 {
  color: #38bdf8;
  font-size: 2.3rem;
  margin: 0.5rem 0;
}
.bc-hero .lead {
  max-width: 640px;
  color: #cbd5e1;
}
.bc-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}
        `.trim(),
      },
      {
        id: "consulting-services",
        name: "Services",
        html: `
<section class="bc-services" id="services">
  <h2>What we do</h2>
  <div class="bc-service-grid">
    <article class="bc-service">
      <h3>Product strategy</h3>
      <p>Discovery, positioning, and outcome-focused roadmaps.</p>
    </article>
    <article class="bc-service">
      <h3>Process design</h3>
      <p>Lean delivery playbooks, rituals, and team enablement.</p>
    </article>
    <article class="bc-service">
      <h3>Analytics</h3>
      <p>North-star metrics, dashboards, and experiment design.</p>
    </article>
  </div>
</section>
        `.trim(),
        css: `
.bc-services {
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.bc-services h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
.bc-service-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.bc-service {
  border: 1px solid #1f2937;
  background: #0b1224;
  border-radius: 12px;
  padding: 1.2rem;
}
.bc-service h3 {
  margin: 0 0 0.4rem;
}
.bc-service p {
  color: #cbd5e1;
  font-size: 0.95rem;
}
        `.trim(),
      },
      {
        id: "consulting-process",
        name: "Process",
        html: `
<section class="bc-process">
  <h2>How we work</h2>
  <ol class="bc-steps">
    <li><strong>Assess:</strong> We review goals, data, and constraints.</li>
    <li><strong>Plan:</strong> We co-create a 90-day roadmap with owners.</li>
    <li><strong>Execute:</strong> We embed with your team to deliver.</li>
  </ol>
</section>
        `.trim(),
        css: `
.bc-process {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.bc-steps {
  color: #e5e7eb;
  display: grid;
  gap: 0.75rem;
  padding-left: 1.1rem;
}
.bc-steps li {
  background: #0b1224;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 0.9rem 1rem;
  list-style: decimal;
}
.bc-steps strong {
  color: #a855f7;
}
        `.trim(),
      },
      {
        id: "consulting-contact",
        name: "Contact",
        html: `
<section class="bc-contact" id="contact">
  <div class="bc-contact-card">
    <h3>Book a consultation</h3>
    <p>Tell us about your goals. We respond within one business day.</p>
    <a class="btn-primary" href="mailto:consult@example.com">Schedule a call</a>
  </div>
</section>
        `.trim(),
        css: `
.bc-contact {
  padding: 3rem 2rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}
.bc-contact-card {
  border-radius: 14px;
  border: 1px solid #1f2937;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  padding: 1.75rem;
  color: #0b1224;
}
.bc-contact-card h3 {
  margin: 0 0 0.5rem;
}
.bc-contact-card p {
  margin: 0 0 1rem;
}
.bc-contact-card .btn-primary {
  background: #0b1224;
  color: #e0f2fe;
}
.bc-contact-card .btn-primary:hover {
  background: #020617;
}
        `.trim(),
      },
      {
        id: "consulting-footer",
        name: "Footer",
        html: `
<footer class="footer">
  <p>© 2025 Northbeam Consulting. Better strategy, faster delivery.</p>
</footer>
        `.trim(),
        css: `
.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
  border-top: 1px solid #1f2937;
  margin-top: 3rem;
}
        `.trim(),
      },
    ],
  },
];
