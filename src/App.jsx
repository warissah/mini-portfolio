import "./App.css";
import { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const projects = [
  {
    id: "001",
    title: "Student Mart",
    program: "Starbound Program",
    type: "CSULB Community Marketplace",
    role: "Frontend Developer",
    status: "COMMUNITY IMPACT",
    github: "https://github.com/oscararenas12/TEAM-CHARA.git",
    stack: ["React", "TypeScript", "Next.js", "Supabase"],
    description:
      "A full-stack marketplace platform built for the CSULB community where students can safely buy, sell, and exchange items. I contributed to frontend development, UI components, listing features, and user-centered design.",
  },
  {
    id: "002",
    title: "TranSLAYYYtor",
    program: "MarinaHacks 5.0",
    type: "AI Slang Translator",
    role: "Backend + UI Developer",
    status: "24HR HACKATHON",
    github: "https://github.com/MarinaHacks5-0/SLANG-translator.git",
    stack: ["Flask", "OpenAI API", "JavaScript", "HTML", "CSS"],
    description:
      "A Gen Z slang translator that converts everyday English into modern slang and vice versa. I built the Flask backend, integrated OpenAI API translations, added speech-to-text and text-to-speech, and styled the frontend.",
  },
  {
    id: "003",
    title: "TinyTasks",
    program: "BeachHacks 9.0",
    type: "AI Productivity Assistant",
    role: "AI UX Developer",
    status: "AI MICRO-ACTIONS",
    github: "https://github.com/warissah/tinytasks.git",
    stack: ["AI", "WhatsApp", "UX", "Productivity"],
    description:
      "An AI-powered assistant that helps users overcome procrastination by breaking overwhelming goals into tiny, actionable steps with motivational support and WhatsApp-based interaction.",
  },
  {
    id: "004",
    title: "Guilds",
    program: "STEM Connect Hackathon",
    type: "Social Hobby Platform",
    role: "Full-Stack Developer",
    status: "36HR PROTOTYPE",
    github: "https://github.com/TetsuoKunn/JojosReferenceSASEHack.git",
    stack: ["Flask", "Django", "HTML", "CSS", "JavaScript"],
    description:
      "A full-stack web app where users create and join communities called Guilds based on shared hobbies and interests. I focused on UI design and frontend-to-backend interactions.",
  },
  {
    id: "005",
    title: "Success Pipeline",
    program: "Sisterhood Program",
    type: "ML + Data Engineering",
    role: "Machine Learning Team",
    status: "PREDICTIVE ANALYTICS",
    github: "https://github.com/YOUR-USERNAME/success-pipeline",
    stack: ["Python", "PostgreSQL", "ML", "Data Preprocessing"],
    description:
      "A machine learning and data engineering project focused on predicting student dropout risk. I helped validate data quality, prepare cleaned datasets, separate features and targets, perform train-test splits, and support preprocessing workflows.",
  },
];

const skillRows = [
  ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  ["Python", "FastAPI", "Flask", "Supabase", "PostgreSQL"],
  ["OpenAI API", "Machine Learning", "Data Preprocessing", "Train/Test Splits"],
  ["Figma", "UI/UX", "Branding", "Graphic Design"],
  ["Git", "GitHub", "Docker", "VS Code"],
];

const experiences = [
  {
    id: "01",
    role: "Software Developer Intern",
    org: "Nuevo Hive LLC",
    tag: "SOFTWARE ENGINEERING",
    description:
      "I contribute to a vending operations platform through backend development, refund workflow features, UI/UX improvements, and production-ready software collaboration.",
    skills: ["Python", "FastAPI", "Docker", "Figma", "UI/UX"],
  },
  {
    id: "02",
    role: "Lead Graphic Designer",
    org: "MarinaHacks 5.0",
    tag: "DESIGN LEADERSHIP",
    description:
      "I led a team of five designers to create branding assets, social media campaigns, event graphics, and website visuals for CSULB’s women-centered hackathon.",
    skills: ["Branding", "Leadership", "Web Design", "Marketing"],
  },
  {
    id: "03",
    role: "Board Member & Graphic Designer",
    org: "Women in Computing",
    tag: "COMMUNITY & DESIGN",
    description:
      "I create promotional materials, event branding, and digital content while supporting initiatives that empower women pursuing technology careers.",
    skills: ["Graphic Design", "Marketing", "Community", "Content Strategy"],
  },
  {
    id: "04",
    role: "STEM Outreach Mentor",
    org: "K–12 STEM Outreach",
    tag: "MENTORSHIP",
    description:
      "I work with K–12 students through interactive STEM workshops and hands-on activities, with a focus on encouraging young girls to explore technical fields.",
    skills: ["Mentorship", "Communication", "Leadership", "STEM Education"],
  },
];


export default function App() {


const [activeProject, setActiveProject] = useState(null);

useEffect(() => {
  const closeOnEscape = (event) => {
    if (event.key === "Escape") setActiveProject(null);
  };

  window.addEventListener("keydown", closeOnEscape);
  return () => window.removeEventListener("keydown", closeOnEscape);
}, []);

const [copied, setCopied] = useState(false);

const copyDiscord = async () => {
  try {
    await navigator.clipboard.writeText("wthila");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  } catch {
    setCopied(false);
  }
};

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#intro">Warissa Hossain</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
<section className="home-hero" id="home">
  <div className="home-card">
    <div className="home-card-topline">
      <p className="eyebrow">Computer Science student</p>
      <span className="home-status">
        <span />
        Open to opportunities
      </span>
    </div>

    <div className="home-character-wrap">
      <img
        className="home-character"
        src="/about-girl.png"
        alt="Illustration of Warissa coding"
      />
    </div>

    <div className="home-copy">
      <h1>
        <span id="home1">Hi, I’m</span>
        <span>Warissa Hossain.</span>
      </h1>

      <p className="home-intro">
        I’m interested in building thoughtful software and figuring out how
        things work behind the scenes. I’m currently learning more about backend
        systems and exploring ways to create useful, real-world applications.
      </p>

      <div className="home-details">
        <div>
          <span>Studying at</span>
          <p>California State University, Long Beach</p>
        </div>
        <div>
          <span>Degree</span>
          <p>B.S. in Computer Science</p>
        </div>
        <div>
          <span>Graduating</span>
          <p>May 2028</p>
        </div>
      </div>

      <div className="home-links">
        <a className="home-project-link" href="#projects">
          Explore my projects <span aria-hidden="true">→</span>
        </a>
        <a href="https://github.com/warissah">GitHub </a>
        <a href="https://www.linkedin.com/in/warissa-hossain-0b4384330">LinkedIn </a>
        <a href="/resume2.pdf" target="_blank" rel="noreferrer">Resume </a>
      </div>
    </div>
  </div>
</section>

<section className="section about about-text-only" id="about">
  <div className="content">
    <p className="eyebrow">A little about me</p>
    <h2>About</h2>

    <div className="about-copy">
      <p>
        I’m a Computer Science student at CSULB who loves learning by making
        things. I enjoy working through a coding challenge, seeing an idea come
        together, and adding the little details that make a project feel
        thoughtful.
      </p>
      <p>
        When I’m away from my laptop, I’m usually doing something creative:
        working on graphic design, crochet, or cross-stitch. I like having a
        mix of technical and hands-on projects in my life.
      </p>
    </div>
  </div>
</section>

  <section id="projects" className="section projects">
  <div className="content">
    <p className="eyebrow">A few things I’ve made</p>
    <h2>
      Project<span className="title-period">.</span>
    </h2>
    <p className="projects-intro">Choose a folder to open its project file.</p>

    <div className="project-folder-grid">
      {projects.map((project) => (
        <button
          className="project-folder"
          key={project.id}
          onClick={() => setActiveProject(project)}
          aria-label={`Open ${project.title} project file`}
        >
          <img src="/fold3.png" alt="" />
          <span className="project-folder-label">{project.title}</span>
        </button>
      ))}
    </div>
  </div>

  {activeProject && (
    <div
      className="project-file-backdrop"
      onClick={() => setActiveProject(null)}
    >
      <article
        className="project-file"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-file-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-file-bar">
          <span className="file-name">
            {activeProject.title.toLowerCase().replaceAll(" ", "-")}.txt
          </span>
          <button
            className="project-file-close"
            onClick={() => setActiveProject(null)}
            aria-label="Close project file"
          >
            ×
          </button>
        </div>

        <div className="project-file-content">
          <div className="file-heading">
            <p className="file-overline">PROJECT {activeProject.id}</p>
            <h3 id="project-file-title">{activeProject.title}</h3>
            <span className="file-status">{activeProject.status}</span>
          </div>

          <div className="project-file-meta">
            <div className="file-meta-card">
              <span>Program</span>
              <p>{activeProject.program}</p>
            </div>
            <div className="file-meta-card">
              <span>Project type</span>
              <p>{activeProject.type}</p>
            </div>
            <div className="file-meta-card">
              <span>My role</span>
              <p>{activeProject.role}</p>
            </div>
          </div>

          <div className="file-description-block">
            <p className="file-section-label">About the project</p>
            <p className="file-description">{activeProject.description}</p>
          </div>

          <div className="file-stack-section">
            <p className="file-section-label">Tech stack</p>
            <div className="file-stack">
              {activeProject.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <a
            className="file-github-link"
            href={activeProject.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub repository <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </div>
  )}
</section>


<section className="skills-section" id="skills">
  <div className="skills-content">
    <p className="eyebrow">A quick reference</p>
    <h2>Things I work with<span>.</span></h2>

    <div className="skills-index">
      {[
        ["01", "Web", ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"]],
        ["02", "Backend", ["Python", "FastAPI", "Flask", "Supabase", "PostgreSQL"]],
        ["03", "Data & AI", ["OpenAI API", "Machine Learning", "Data Preprocessing"]],
        ["04", "Design", ["Figma", "UI/UX", "Branding", "Graphic Design"]],
        ["05", "Tools", ["Git", "GitHub", "Docker", "VS Code"]],
      ].map(([number, category, items]) => (
        <div className="skills-row" key={category}>
          <span className="skills-number">{number}</span>
          <h3>{category}</h3>
          <div className="skills-list">
            {items.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="experience" className="section experience-board-section">
  <div className="experience-board-content">
    <p className="eyebrow">Work, design, and community</p>
    <h2>Experience</h2>
    <p className="experience-intro">
      A few roles and communities that have shaped how I work.
    </p>

    <div className="experience-pinboard">
      {experiences.map((item) => (
        <article className="experience-pin" key={item.id}>
          <div className="experience-pin-top">
            <span className="experience-number">{item.id}</span>
            <span className="experience-tag">{item.tag}</span>
          </div>

          <h3>{item.role}</h3>
          <p className="experience-org">{item.org}</p>
          <p className="experience-description">{item.description}</p>

          <div className="experience-skills">
            {item.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


<section className="section contact" id="contact">
  <div className="contact-panel">
    <div className="contact-heading">
      <p className="contact-kicker">A NOTE, A QUESTION, AN OPPORTUNITY</p>
      <h2>Let’s make<br />something happen<span>.</span></h2>
      <p>
        I’m open to meeting new people, talking about ideas, and hearing
        about software engineering opportunities.
      </p>
    </div>

    <div className="contact-grid">
      <a
        className="contact-card"
        href="https://github.com/warissah"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon"><FaGithub /></span>
        <span className="contact-card-copy">
          <small>TAKE A LOOK</small>
          <strong>GitHub</strong>
        </span>
        <span className="contact-arrow">↗</span>
      </a>

      <a
        className="contact-card"
        href="https://www.linkedin.com/in/warissa-hossain-0b4384330/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon"><FaLinkedin /></span>
        <span className="contact-card-copy">
          <small>LET’S CONNECT</small>
          <strong>LinkedIn</strong>
        </span>
        <span className="contact-arrow">↗</span>
      </a>

      <a
        className="contact-card"
        href="mailto:warissahossain@gmail.com"
      >
        <span className="contact-icon"><MdEmail /></span>
        <span className="contact-card-copy">
          <small>DROP ME A LINE</small>
          <strong>Email</strong>
        </span>
        <span className="contact-arrow">↗</span>
      </a>

      <button
        className={`contact-card ${copied ? "is-copied" : ""}`}
        type="button"
        onClick={copyDiscord}
      >
        <span className="contact-icon"><FaDiscord /></span>
        <span className="contact-card-copy">
          <small>{copied ? "COPIED TO CLIPBOARD" : "FIND ME ON DISCORD"}</small>
          <strong>{copied ? "wthila copied!" : "wthila"}</strong>
        </span>
        <span className="contact-arrow">{copied ? "✓" : "+"}</span>
      </button>
    </div>

    <div className="contact-bottom">
      <span>CSULB · COMPUTER SCIENCE</span>
      <span>Thanks for stopping by <span className="contact-heart">♥</span></span>
    </div>
  </div>
</section>
      </main>
    </>
  );


  
}

