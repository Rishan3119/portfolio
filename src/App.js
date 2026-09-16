import { useEffect, useState } from "react";
import "./App.css";
import resumePdf from "./Assets/Mohammed_Rishan_Full_Stack_Developer_Resume.pdf";

const skills = {
  "Frontend": ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Router", "Responsive UI"],
  "Backend": ["Django", "Django REST Framework", "Python", "Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"],
  "Database": ["MySQL", "MongoDB", "SQLite", "Relational Data Modeling", "Query Optimization"],
  "DevOps & Cloud": ["Git", "GitHub", "VPS", "cPanel", "Vercel", "SSL/TLS", "DNS", "Production Deployment"],
  "Integrations": ["Stripe", "Google Maps", "GA4", "Search Console", "Supabase", "Email OTP", "Third-Party APIs"],
};

const experience = [
  {
    company: "Happy Marine Shipping L.L.C",
    role: "Software Developer / Full Stack Developer",
    period: "Jan 2025 — Present",
    location: "Dubai, UAE",
    bullets: [
      "Own end-to-end development and production support of Mariniz.com, a live B2B maritime SaaS marketplace for ship sale & purchase, chartering, cargo, and shipping requirements.",
      "Built and maintained the React.js frontend and Django REST Framework backend with reusable components, REST APIs, pagination, search, filters, listing pages, and role-based admin workflows.",
      "Delivered six core marketplace modules: Ships for Sale, Purchase Queries, Open Ships, Open Cargo, Ship Requirements, and Cargo Requirements.",
      "Implemented secure authentication, role-based permissions, email OTP verification, protected contact information, form validation, and safe update/delete workflows.",
      "Integrated Stripe payments, invoice/payment history features, Google Maps, GA4, Search Console, sitemap/technical SEO, and Supabase-backed admin chat data.",
      "Manage production deployment across Vercel and VPS/cPanel environments, including SSL/TLS, domain configuration, debugging, releases, and uptime-focused maintenance."
    ]
  },
  {
    company: "Altos Technologies",
    role: "Full Stack Developer — React & Django",
    period: "2024 — 2025",
    location: "Kochi, Kerala, India",
    bullets: [
      "Developed client-facing web applications with React.js and Django, contributing to a reported 30% improvement in user engagement and application performance.",
      "Optimized REST API architecture, reducing average API response time by 20%.",
      "Introduced structured debugging and testing workflows that reduced production bugs by 40%.",
      "Refactored database schemas and queries, reducing processing time by 15% while supporting higher concurrent user loads."
    ]
  }
];

const projects = [
  {
    title: "Mariniz — Maritime SaaS Marketplace",
    eyebrow: "Production Project",
    description:
      "A live B2B maritime marketplace connecting ship owners, brokers, charterers, and cargo interests through sale & purchase, chartering, cargo, payment, admin, and mapping workflows.",
    tech: ["React.js", "Django REST Framework", "Python", "MySQL", "Stripe", "Google Maps", "Supabase", "Vercel"],
    link: "https://mariniz.com",
    cta: "Visit Live Platform",
  },
  {
    title: "Hospital Administration System",
    eyebrow: "Full Stack Project",
    description:
      "Role-based hospital management application with Reception, Doctor, and Pharmacy modules, secure authentication, patient IDs, appointments, prescriptions, patient history, and responsive interfaces.",
    tech: ["React.js", "Django", "REST API", "MySQL"],
  },
  {
    title: "E-Commerce Book Store",
    eyebrow: "MERN Project",
    description:
      "Full-stack bookstore with product browsing, cart and order workflows, JWT authentication, encrypted passwords, and an admin dashboard for inventory CRUD operations.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container nav">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
            MR<span>.</span>
          </a>

          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-resume" href={resumePdf} target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="status-dot" />
                Available immediately · Dubai, UAE
              </div>

              <p className="hero-kicker">FULL STACK DEVELOPER</p>
              <h1>
                Building production web
                <span> experiences that solve real business problems.</span>
              </h1>

              <p className="hero-intro">
                I'm <strong>Mohammed Rishan A N</strong>, a Full Stack Developer with 2+ years of
                experience building scalable applications using React.js, Django, Python, Node.js,
                and REST APIs.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View My Work</a>
                <a className="btn btn-secondary" href={resumePdf} target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </div>

              <div className="hero-contact">
                <a href="mailto:rishan3119@gmail.com">rishan3119@gmail.com</a>
                <span>•</span>
                <a href="tel:+971543889307">+971 54 388 9307</a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="code-window">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="code-lines">
                  <p><span className="code-purple">const</span> developer = {"{"}</p>
                  <p className="indent"><span className="code-blue">name</span>: <span className="code-green">"Mohammed Rishan"</span>,</p>
                  <p className="indent"><span className="code-blue">role</span>: <span className="code-green">"Full Stack Developer"</span>,</p>
                  <p className="indent"><span className="code-blue">stack</span>: [</p>
                  <p className="indent2"><span className="code-green">"React.js"</span>, <span className="code-green">"Django"</span>,</p>
                  <p className="indent2"><span className="code-green">"Python"</span>, <span className="code-green">"Node.js"</span></p>
                  <p className="indent">],</p>
                  <p className="indent"><span className="code-blue">location</span>: <span className="code-green">"Dubai, UAE"</span>,</p>
                  <p className="indent"><span className="code-blue">focus</span>: <span className="code-green">"Production-ready software"</span></p>
                  <p>{"};"}</p>
                </div>
              </div>

              <div className="hero-stat-grid">
                <div className="hero-stat"><strong>2+</strong><span>Years Experience</span></div>
                <div className="hero-stat"><strong>6</strong><span>Core SaaS Modules</span></div>
                <div className="hero-stat"><strong>40%</strong><span>Fewer Production Bugs</span></div>
                <div className="hero-stat"><strong>20%</strong><span>API Response Improvement</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container two-column">
            <div>
              <p className="section-label">01 / ABOUT</p>
              <h2>I build across the entire product lifecycle.</h2>
            </div>
            <div className="about-copy">
              <p>
                My experience spans frontend architecture, backend API development, database design,
                authentication, payments, analytics, SEO, deployment, and production support.
              </p>
              <p>
                At Happy Marine Shipping, I work on <strong>Mariniz.com</strong>, a live maritime
                SaaS marketplace serving ship owners, brokers, charterers, and cargo interests.
                I translate business requirements into reliable software and maintain the platform
                from development through deployment.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/in/rishan-a-n" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://mariniz.com" target="_blank" rel="noreferrer">Mariniz.com ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="skills">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">02 / TECHNICAL SKILLS</p>
                <h2>Tools I use to ship products.</h2>
              </div>
              <p>From UI development to APIs, databases, cloud deployment, and third-party integrations.</p>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <article className="skill-card" key={category}>
                  <h3>{category}</h3>
                  <div className="skill-tags">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">03 / EXPERIENCE</p>
                <h2>Production-focused experience.</h2>
              </div>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.period}`}>
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="timeline-content">
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                    <ul>
                      {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">04 / SELECTED PROJECTS</p>
                <h2>Projects that demonstrate full-stack ownership.</h2>
              </div>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className={`project-card ${index === 0 ? "project-card--featured" : ""}`} key={project.title}>
                  <div className="project-top">
                    <span>{project.eyebrow}</span>
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  {project.link && (
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                      {project.cta} ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container education-grid">
            <div>
              <p className="section-label">05 / EDUCATION</p>
              <h2>Education & training.</h2>
            </div>
            <div className="education-list">
              <article>
                <span>2020 — 2023</span>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Kannur University · Kannur, Kerala, India</p>
              </article>
              <article>
                <span>2024 — 2025</span>
                <h3>Full Stack Developer — ReactJS & Django</h3>
                <p>Altos Technologies · Kochi, Kerala, India</p>
              </article>
              <article>
                <span>June 2023</span>
                <h3>MERN/MEAN Full Stack Web Development</h3>
                <p>Luminar Technolab Pvt. Ltd. · Kochi, Kerala, India</p>
              </article>
              <article>
                <span>Certification</span>
                <h3>Professional Certification</h3>
                <p>National Council for Technology and Training (NACTET)</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div>
              <p className="section-label">06 / CONTACT</p>
              <h2>Have a role or project in mind?</h2>
              <p>
                I'm available immediately in Dubai and open to Full Stack Developer,
                React Developer, Django Developer, and Python Developer opportunities.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-light" href="mailto:rishan3119@gmail.com">Send an Email</a>
              <a className="contact-text-link" href="https://www.linkedin.com/in/rishan-a-n" target="_blank" rel="noreferrer">
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Mohammed Rishan A N</p>
          <p>Built with React.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
