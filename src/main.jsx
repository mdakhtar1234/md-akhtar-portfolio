import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Menu, X,
  Code2, Database, Server, Monitor, GraduationCap, BriefcaseBusiness,
  ExternalLink, ChevronDown
} from "lucide-react";
import "./styles.css";
import profile from "./assets/My_image_is_professional.png";

const skills = {
  Frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
  Backend: ["Java", "Spring Boot", "Node.js", "Express.js"],
  Database: ["MySQL", "JDBC"],
  Programming: ["Java", "Python", "C"],
  Tools: ["Git", "GitHub", "VS Code", "Eclipse IDE", "Vite"]
};

const projects = [
  {
    number: "01",
    title: "Computer & Laptop Marketplace",
    description: "A modern marketplace interface for computers, laptops, gaming PCs, accessories and technology services.",
    tech: ["React.js", "Bootstrap", "JavaScript"],
    type: "Frontend",
    liveUrl: "https://tech-market-neon.vercel.app/"
  },
  {
    number: "02",
    title: "Library Management System",
    description: "A database-driven management system designed to handle books, members, staff, issues and fine management.",
    tech: ["Java", "MySQL", "JDBC"],
    type: "Full Stack"
  },
  {
    number: "03",
    title: "School Management System",
    description: "A structured education management platform covering students, teachers, attendance, fees and notices.",
    tech: ["Java", "React.js", "MySQL"],
    type: "Full Stack"
  },
  {
    number: "04",
    title: "Student Management System",
    description: "A responsive CRUD application for creating, viewing, updating and managing student records.",
    tech: ["React.js", "JavaScript", "Bootstrap"],
    type: "Frontend"
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const sections = ["home", "about", "skills", "projects", "journey", "experience", "contact"];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 180;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const nav = ["home", "about", "skills", "projects", "journey", "experience", "contact"];

  return (
    <div className="site">
      <div className="grain" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span>MA</span>
          <strong>MD AKHTAR ALI</strong>
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {nav.map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={active === item ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item === "home" ? "Home" : item === "journey" ? "Learning" : item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's Talk</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> JAVA FULL STACK DEVELOPER</p>
            <h1>Building digital<br /><em>experiences</em> with purpose.</h1>
            <p className="hero-text">
              I’m MD Akhtar Ali, a Java Full Stack Developer focused on creating
              clean, responsive and user-friendly web applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn gold">Explore My Work <ArrowUpRight size={17} /></a>
              <a href="#contact" className="btn outline">Get In Touch</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Mumbai, Maharashtra</span>
              <span><Code2 size={15} /> Available for opportunities</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="photo-frame">
              <div className="photo-glow" />
              <img src={profile} alt="MD Akhtar Ali" />
              <div className="photo-tag">
                <span>01</span>
                <div><b>MD AKHTAR ALI</b><small>Developer / Learner</small></div>
              </div>
            </div>
            <div className="vertical-label">PORTFOLIO / 2026</div>
          </div>

          <div className="scroll-note"><ChevronDown size={15} /> SCROLL TO EXPLORE</div>
        </section>

        <section id="about" className="section split-section">
          <div className="section-heading">
            <p className="eyebrow"><span /> ABOUT ME</p>
            <h2>A developer who<br /><em>keeps learning.</em></h2>
          </div>
          <div className="about-content">
            <p className="lead">
              I am a Computer Science graduate and Java Full Stack Developer
              passionate about turning ideas into practical digital products.
            </p>
            <p>
              My development journey covers frontend interfaces, Java backend
              development, databases and modern web technologies. I enjoy
              understanding how systems work and continuously improving my
              problem-solving and development skills.
            </p>
            <div className="stats">
              <div><strong>2025</strong><span>B.E. Completed</span></div>
              <div><strong>01+</strong><span>Year Teaching</span></div>
              <div><strong>15+</strong><span>Technologies</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-top">
            <div>
              <p className="eyebrow"><span /> TECHNICAL SKILLS</p>
              <h2>My <em>toolkit.</em></h2>
            </div>
            <p className="section-intro">A growing collection of technologies I use to design, develop and understand modern applications.</p>
          </div>

          <div className="skill-grid">
            {Object.entries(skills).map(([category, list], i) => (
              <div className="skill-card" key={category}>
                <div className="skill-icon">
                  {i === 0 ? <Monitor /> : i === 1 ? <Server /> : i === 2 ? <Database /> : <Code2 />}
                </div>
                <h3>{category}</h3>
                <div className="chips">
                  {list.map(skill => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-top">
            <div>
              <p className="eyebrow"><span /> SELECTED WORK</p>
              <h2>Things I've <em>built.</em></h2>
            </div>
            <p className="section-intro">Projects created while learning, experimenting and applying full-stack development concepts.</p>
          </div>

          <div className="project-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                {project.liveUrl ? (
                  <a
                    className="project-arrow"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <ArrowUpRight />
                  </a>
                ) : (
                  <button
                    className="project-arrow"
                    aria-label={`View details for ${project.title}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <ArrowUpRight />
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section dark-section">
          <div className="section-heading">
            <p className="eyebrow"><span /> LEARNING JOURNEY</p>
            <h2>Always <em>moving forward.</em></h2>
          </div>
          <div className="timeline">
            {[
              ["01", "Core Programming", "Java, OOP, Python, C and problem solving."],
              ["02", "Web Development", "HTML, CSS, Bootstrap and JavaScript."],
              ["03", "React & Frontend", "React.js, routing, state management and responsive UI."],
              ["04", "Backend & Database", "Spring Boot, JDBC, MySQL, Node.js and Express.js."],
              ["05", "DSA & Full Stack", "Data structures, algorithms and end-to-end application development."]
            ].map(item => (
              <div className="timeline-item" key={item[0]}>
                <span>{item[0]}</span>
                <div><h3>{item[1]}</h3><p>{item[2]}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow"><span /> EXPERIENCE & EDUCATION</p>
            <h2>The foundation<br />behind the <em>work.</em></h2>
          </div>
          <div className="experience-grid">
            <article className="info-card">
              <BriefcaseBusiness />
              <span className="card-label">EXPERIENCE</span>
              <h3>Teaching & Computer Education</h3>
              <p className="date">1 Year Experience</p>
              <p>Worked in education, supporting students with computer learning while strengthening communication, patience and technical teaching skills.</p>
            </article>
            <article className="info-card">
              <GraduationCap />
              <span className="card-label">EDUCATION</span>
              <h3>B.E. — Computer Science</h3>
              <p className="date">Gujarat Technological University · 2025</p>
              <p>Computer Science engineering background with a focus on programming, software development and problem solving.</p>
            </article>
            <article className="info-card">
              <Code2 />
              <span className="card-label">CURRENTLY LEARNING</span>
              <h3>Java Full Stack Development</h3>
              <p className="date">IT Vedant · Andheri, Mumbai</p>
              <p>Developing practical skills across Java, Spring Boot, React, SQL, JDBC and full-stack application development.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section section">
          <div className="contact-inner">
            <p className="eyebrow"><span /> CONTACT</p>
            <h2>Let's build something<br /><em>meaningful.</em></h2>
            <p className="contact-copy">
              Open to software development opportunities, collaborations and projects
              where I can learn, contribute and grow.
            </p>
            <div className="contact-links">
              <a href="mailto:your-email@example.com"><Mail />amd064754@gmail.com<ArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/md-akhtar-ali/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
              <a href="https://github.com/mdakhtar1234" target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span>MA</span><b>MD AKHTAR ALI</b></div>
        <p>© 2026 MD Akhtar Ali. All Rights Reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {showTop && <a className="top-btn" href="#home" aria-label="Back to top">↑</a>}

      {selectedProject && (
        <div className="project-modal" role="presentation" onClick={() => setSelectedProject(null)}>
          <div
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onClick={event => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>
            <span className="project-type">{selectedProject.type}</span>
            <p className="modal-number">PROJECT {selectedProject.number}</p>
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="chips">
              {selectedProject.tech.map(technology => <span key={technology}>{technology}</span>)}
            </div>
            {selectedProject.liveUrl ? (
              <a
                className="btn gold modal-link"
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Live Project <ArrowUpRight size={17} />
              </a>
            ) : (
              <p className="modal-note">Live project link coming soon.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
