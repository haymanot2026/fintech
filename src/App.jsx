
import { useState, useEffect } from 'react'
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
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Artificial intelligence concept',
  },
  {
    title: 'Netflix Clone',
    category: 'WEB DEVELOPMENT',
    description:
      'A streaming-platform interface demonstrating modern frontend development, reusable components, and responsive design.',
    status: 'Frontend Project',
    github: 'https://github.com/haymanot2026',
    live: 'https://net-fex-s25-tan.vercel.app/',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Cinema screen and movie theater',
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
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Team collaborating on a digital project',
  },
  {
    title: 'Maleda SACCO System',
    category: 'FINTECH CONCEPT',
    description:
      'A cooperative management application in progress, beginning with member management and designed for future digital financial services.',
    status: 'In Progress',
    github: '',
    live: '',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Financial analytics dashboard',
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
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    document.body.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    )

    try {
      localStorage.setItem(
        'theme',
        isDarkMode ? 'dark' : 'light'
      )
    } catch {
      // Theme still works if localStorage is unavailable.
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
      <nav className="navbar navbar-expand-lg px-4 py-3">
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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
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
                onClick={() => setIsDarkMode(!isDarkMode)}
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
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="section-kicker">MY BACKGROUND</p>

              <h2 className="section-title">
                Finance Meets Technology
              </h2>

              <p className="about-text">
                I hold a Bachelor’s degree in Accounting and Finance
                from Bahir Dar University and bring professional
                banking experience to my technology journey. After
                completing AI-Powered Full-Stack Application
                Development training at Evangadi Academy, I am applying
                my financial-services perspective to software projects,
                with an interest in secure digital banking, financial
                data integrity, and practical FinTech solutions.
              </p>

              <a
                href="#projects"
                className="btn btn-warning fw-bold mt-3"
              >
                View My Work →
              </a>
            </div>

            <div className="col-lg-5 text-center mt-4 mt-lg-0">
              <div
                className="profile-placeholder p-0 overflow-hidden"
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Haymanot Yetwale"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div>
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      HY
                    </span>
                    <p className="m-0">Haymanot Yetwale</p>
                    <small>Add your photo to public/profile.jpg</small>
                  </div>
                )}
              </div>
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
            {projects.map((project) => (
              <div
                className="col-md-6 col-lg-3"
                key={project.title}
              >
                <article className="project-card h-100 d-flex flex-column">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>

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

                    <span className="project-status">
                      {project.status}
                    </span>

                    <div className="mt-auto pt-3 d-flex flex-wrap gap-2">
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
                        <span className="small text-secondary">
                          Project in development
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
              FinTech, or software development? Explore my projects
              and connect with me.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <a
                href="https://github.com/haymanot2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning btn-lg fw-bold"
              >
                GitHub Profile ↗
              </a>

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
            © {new Date().getFullYear()} Haymanot Yetwale. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App