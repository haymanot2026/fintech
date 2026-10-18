
import { useEffect, useState } from 'react'
import './App.css'

const skills = [
  'HTML5',
  'CSS3',
  'Bootstrap',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
  'AI-Powered Development',
  'Git & GitHub',
  'REST API Integration',
  'Responsive Web Design',
]

const projects = [
  {
    title: 'GPT Clone',
    category: 'AI APPLICATION',
    description:
      'An AI chat application demonstrating conversational interfaces, API integration, and full-stack application development.',
    status: 'Full-Stack Project',
    github: 'https://github.com/haymanot2026/gpt-clone-fullstack',
    live: 'https://gpt-clone-fullstack.vercel.app',
    image: '/chatgpt-clone.jpg',
    imageAlt: 'GPT Clone AI application interface',
  },
  {
    title: 'Netflix Clone',
    category: 'WEB DEVELOPMENT',
    description:
      'A streaming-platform interface demonstrating modern frontend development, reusable components, and responsive design.',
    status: 'Frontend Project',
    github: 'https://github.com/haymanot2026',
    live: 'https://net-fex-s25-tan.vercel.app/',
    image: '/netflix-clone.jpg',
    imageAlt: 'Netflix Clone streaming platform interface',
  },
  {
    title: 'AI-Powered EvangadiForum',
    category: 'FULL-STACK APPLICATION',
    description:
      'A question-and-answer forum with frontend, backend, authentication, and relational database integration.',
    status: 'Capstone Project',
    github:
      'https://github.com/haymanot2026/AI-Powered-EvangadiForum',
    live: 'https://ai-powered-evangadi-forum-roan.vercel.app',
    image: '/evangadi-forum.jpg',
    imageAlt: 'AI-Powered Evangadi Forum discussion application',
  },
  {
    title: 'Maleda SACCO System',
    category: 'FINTECH CONCEPT',
    description:
      'A cooperative management application in progress, beginning with member management and designed for future digital financial services.',
    status: 'In Progress',
    github: '',
    live: '',
    image: '/maleda-sacco.jpg',
    imageAlt: 'Maleda SACCO management dashboard concept',
  },
]

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('theme') !== 'light'
    } catch {
      return true
    }
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light',
    )

    try {
      localStorage.setItem(
        'theme',
        isDarkMode ? 'dark' : 'light',
      )
    } catch {
      // Theme works even when localStorage is unavailable.
    }
  }, [isDarkMode])

  const closeMenu = () => setMenuOpen(false)

  const downloadCV = (
    <a
      className="btn btn-outline-warning fw-bold px-3"
      href="/Haymanot_Yetwale_Resume.pdf"
      download="Haymanot_Yetwale_Resume.pdf"
    >
      Download CV 📄
    </a>
  )

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav
        className={`navbar navbar-expand-lg px-3 px-md-4 py-3 ${
          isDarkMode ? 'navbar-dark' : 'navbar-light'
        }`}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#home"
            onClick={closeMenu}
          >
            Haymanot Yetwale<span className="gold">.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="portfolioNavigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            id="portfolioNavigation"
            className={`navbar-collapse ${
              menuOpen ? 'd-flex' : 'd-none'
            } d-lg-flex`}
          >
            <div className="ms-auto d-flex align-items-center gap-3 flex-wrap nav-actions">
              <a
                className="nav-link"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>

              <a
                className="nav-link"
                href="#skills"
                onClick={closeMenu}
              >
                Skills
              </a>

              <a
                className="nav-link"
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>

              <button
                type="button"
                onClick={() => setIsDarkMode((dark) => !dark)}
                className="btn btn-theme-toggle"
                aria-label="Toggle color theme"
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>

              {downloadCV}

              <a
                className="btn btn-warning fw-bold px-3"
                href="#contact"
                onClick={closeMenu}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <header id="home" className="hero-section">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <p className="gold fw-bold text-uppercase">
                  Banking · FinTech · Artificial Intelligence
                </p>

                <h1 className="display-3 fw-bold">
                  Bridging Finance
                  <span className="gold d-block">
                    &amp; Technology
                  </span>
                </h1>

                <p className="lead mt-4">
                  Banking professional with 8 years of experience,
                  developing AI-powered full-stack applications and
                  exploring practical digital financial solutions.
                </p>

                <div className="mt-4 d-flex gap-3 flex-wrap">
                  <a
                    href="#projects"
                    className="btn btn-warning btn-lg fw-bold"
                  >
                    Explore Projects →
                  </a>

                  <a
                    href="/Haymanot_Yetwale_Resume.pdf"
                    download="Haymanot_Yetwale_Resume.pdf"
                    className="btn btn-outline-light btn-lg fw-bold"
                  >
                    Download CV 📄
                  </a>

                  <a
                    href="#contact"
                    className="btn btn-outline-neon btn-lg fw-bold"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="hero-stats row g-3 mt-4">
                  <div className="col-6 col-md-4">
                    <div className="stat-card">
                      <strong>8 Years</strong>
                      <span>Banking Experience</span>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="stat-card">
                      <strong>AI + Full-Stack</strong>
                      <span>Development Focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <section id="about" className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="section-kicker">MY BACKGROUND</p>

              <h2 className="section-title">
                About Me: Finance Meets Technology
              </h2>

              <h4 className="about-subtitle fw-bold mb-3">
                Bridging Banking, AI &amp; Digital Innovation
              </h4>

              <p className="about-text">
                I am an AI-Powered Full-Stack Developer with
                8 years of banking experience and a passion for
                building secure, intelligent, and scalable
                digital solutions.
              </p>

              <p className="about-text">
                With a background in Accounting and Finance and
                specialized training in AI-powered application
                development, I combine financial industry knowledge
                with modern software engineering to solve real-world
                business problems.
              </p>

              <p className="about-text">
                My interests include full-stack development, AI
                integration, FinTech, database management, and
                secure digital systems. I am passionate about
                improving financial services through automation
                and data-driven solutions.
              </p>

              <div className="about-highlight mt-4">
                <h5 className="gold fw-bold">My Mission</h5>
                <p className="about-text">
                  To build innovative digital products that make
                  financial services smarter, more accessible,
                  and more efficient.
                </p>

                <h5 className="gold fw-bold mt-3">My Vision</h5>
                <p className="about-text mb-0">
                  To contribute to the digital transformation of
                  banking through AI-powered FinTech solutions.
                </p>
              </div>

              <a
                href="#projects"
                className="btn btn-warning fw-bold mt-4"
              >
                View My Work →
              </a>
            </div>

            <div className="col-lg-5 text-center mt-4 mt-lg-0">
              <ProfilePhoto />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills-section py-5">
          <div className="container">
            <p className="section-kicker">MY TOOLKIT</p>

            <h2 className="section-title">Technical Skills</h2>

            <p className="section-intro">
              Technologies used in my learning and development projects.
            </p>

            <div className="row g-3 mt-2">
              {skills.map((skill) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={skill}
                >
                  <div className="skill-card">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-5">
          <p className="section-kicker">SELECTED WORK</p>

          <h2 className="section-title">
            Projects &amp; Exploration
          </h2>

          <p className="section-intro">
            Projects connecting software development, artificial
            intelligence, and financial services.
          </p>

          <div className="row g-4 mt-2">
            {projects.map((project, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={project.title}
              >
                <article className="project-card h-100 d-flex flex-column">
                  <span className="project-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <ProjectImage project={project} />

                  <div className="project-content p-3 d-flex flex-column flex-grow-1">
                    <p className="section-kicker mb-2">
                      {project.category}
                    </p>

                    <h3 className="h5 fw-bold">
                      {project.title}
                    </h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="mb-3">
                      <span className="project-status">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-auto pt-2 d-flex flex-wrap gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-warning btn-sm"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-warning btn-sm fw-bold"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      {!project.github && !project.live && (
                        <span className="badge bg-warning-subtle text-warning border border-warning-subtle py-2 px-3 fw-semibold">
                          In Active Development
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section py-5">
          <div className="container text-center">
            <p className="section-kicker">LET'S CONNECT</p>

            <h2 className="section-title">
              Building the Future of Finance
            </h2>

            <p className="section-intro mx-auto">
              Interested in AI-powered applications, digital banking,
              FinTech, or software development? Let's discuss
              collaboration, career opportunities, or project inquiries.
            </p>

            <div className="row g-4 justify-content-center mt-3 text-start">
              <div className="col-md-6 col-lg-4">
                <div className="contact-card">
                  <span className="contact-icon" aria-hidden="true">
                    ✉️
                  </span>
                  <h3>Email Directly</h3>
                  <p>haymanotyetwale86@gmail.com</p>
                  <a
                    href="mailto:haymanotyetwale86@gmail.com"
                    className="btn btn-warning fw-bold btn-sm w-100"
                  >
                    Send Email ↗
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="contact-card">
                  <span className="contact-icon" aria-hidden="true">
                    💻
                  </span>
                  <h3>GitHub Profile</h3>
                  <p>Explore source code &amp; repositories</p>
                  <a
                    href="https://github.com/haymanot2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning fw-bold btn-sm w-100"
                  >
                    View GitHub ↗
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="contact-card">
                  <span className="contact-icon" aria-hidden="true">
                    📄
                  </span>
                  <h3>Curriculum Vitae</h3>
                  <p>Download full resume &amp; experience</p>
                  <a
                    href="/Haymanot_Yetwale_Resume.pdf"
                    download="Haymanot_Yetwale_Resume.pdf"
                    className="btn btn-outline-neon fw-bold btn-sm w-100"
                  >
                    Download CV 📄
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-5">
              <a
                href="#home"
                className="btn btn-outline-light btn-lg fw-bold"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer py-4">
        <div className="container text-center">
          <p className="mb-2">
            <strong>
              Haymanot Yetwale<span className="gold">.</span>
            </strong>
          </p>

          <p className="small mb-2">
            Banking · FinTech · AI-Powered Full-Stack Development
          </p>

          <p className="small mb-0">
            © {new Date().getFullYear()} Haymanot Yetwale.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function ProfilePhoto() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="profile-wrapper">
      {!imageError ? (
        <img
          src="/profile.jpg"
          alt="Haymanot Yetwale"
          className="profile-photo"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="profile-fallback">
          <span aria-hidden="true" className="profile-initials">
            HY
          </span>
          <p className="m-0 fw-bold">Haymanot Yetwale</p>
          <small className="text-muted">
            Banking &amp; FinTech Developer
          </small>
        </div>
      )}
    </div>
  )
}

function ProjectImage({ project }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="project-image-wrapper">
      {!imageError ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          className="project-image"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="project-image-fallback"
          role="img"
          aria-label={project.imageAlt}
        >
          <span>{project.category}</span>
          <strong>{project.title}</strong>
        </div>
      )}
    </div>
  )
}

export default App
