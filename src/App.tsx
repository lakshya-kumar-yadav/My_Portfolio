import { useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor';
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Cloud, Cpu,
  ExternalLink, Github, Linkedin, Mail, Menu, X,
  Layers3, Workflow, Smartphone, Globe2,
  ShieldCheck
} from 'lucide-react'

const links = {
  linkedin: 'https://www.linkedin.com/in/lakshya-kumar-yadav-40876736b',
  github: 'https://github.com/lakshya-kumar-yadav',
  email: 'lakshyakumaryadav007@gmail.com',
  credly: 'https://www.credly.com/users/lakshya-kumar-yadav/badges',
}

const skills = [
  { title: 'Automation & Testing', icon: Workflow, items: ['Selenium', 'Appium', 'Cucumber BDD', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'REST API Testing', 'Postman', 'TestNG', 'Mocha', 'Chai', 'SQL'] },
  { title: 'Frameworks & Delivery', icon: Layers3, items: ['Page Object Model', 'Data-Driven Testing', 'Jenkins', 'Git & GitHub', 'CI/CD', 'JIRA', 'QTest', 'ALM', 'Sauce Labs', 'Agile / Scrum'] },
  { title: 'AI & Emerging Technology', icon: Cpu, items: ['Cursor', 'Kiro', 'GitHub Copilot', 'Ollama', 'Amazon Q', 'LLM Workflow Testing', 'Prompt Engineering', 'AI Agents', 'MCP'] },
  { title: 'Cloud', icon: Cloud, items: ['Google Cloud Platform', 'Amazon Web Services', 'Microsoft Azure'] },
];

const projects = [
  {
    number: '01',
    category: 'AI-ASSISTED ENGINEERING · DEVELOPER PRODUCTIVITY',
    title: 'Automated Pre-Push Lint Validation',
    description: 'Created a prompt-driven lint error checking workflow that automatically triggers before git push, helping identify and address code quality issues before changes are pushed to the repository.',
    tags: ['Prompt Engineering', 'Git Hooks', 'Lint Validation', 'AI-assisted Workflow'],
    note: 'Designed to support proactive code quality checks and improve developer productivity.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    category: 'QUALITY ENGINEERING · INTERNAL REUSABLE SOLUTION',
    title: 'OCR-based Test Automation Module',
    description: 'A reusable QA module designed to extract and validate text from images in scenarios where standard DOM-based automation is not sufficient.',
    tags: ['OCR', 'Test Automation', 'Reusable QA'],
    note: 'Implementation details intentionally kept high-level to respect client and employer confidentiality.',
    icon: Code2,
  },
  {
    number: '03',
    category: 'QUALITY ENGINEERING · CROSS-BROWSER',
    title: 'Cross-Browser Functionality Module',
    description: 'A reusable testing module to validate application behaviour across supported browsers and help QA engineers improve consistency in web testing.',
    tags: ['Cross-Browser Testing', 'Web QA', 'Automation'],
    note: 'Implementation details intentionally kept high-level to respect client and employer confidentiality.',
    icon: Globe2,
  },
  {
    number: '04',
    category: 'ANDROID · ACADEMIC PROJECT',
    title: 'Health Check',
    description: 'An Android application developed to support healthcare-related workflows, including vaccination tracking, appointment booking, chat, authentication, profiles and reminders.',
    tags: ['Java', 'Android', 'JDBC', 'MySQL', 'WebSockets'],
    note: 'The Android application connects directly to MySQL using JDBC; WebSockets support real-time chat.',
    icon: Smartphone,
  },
  {
    number: '05',
    category: 'WORKPLACE MANAGEMENT · SUPERTECH',
    title: 'ETAM System',
    description: 'Employee Timesheet & Access Management System — a real-time office check-in and check-out tracking project.',
    tags: ['Employee Tracking', 'Timesheet', 'Access Management','Google Cloud Storage','Vertex AI'],
    note: 'Project summary based on the information currently available.',
    icon: BriefcaseBusiness,
  },
]

const experience = [
  {
    role: 'Software Engineering Analyst',
    company: 'Accenture',
    type: 'Professional Experience',
    points: [  
      'Contribute to automation engineering and quality assurance across web, mobile and API testing.',
      'Develop and maintain automation using Selenium, Java, Appium, JavaScript, Node.js and Cucumber-based frameworks.',
      'Build and maintain Selenium automation scenarios using Page Object Model (POM), dynamic XPath/CSS selectors and reusable components.',
      'Develop and support end-to-end scenarios for web and mobile workflows using Cucumber, Mocha and Chai.',
      'Leverage AI-assisted engineering tools such as Kiro, GitHub Copilot, Amazon Q and other LLM-powered assistants for test creation, code refactoring, workflow automation and quality analysis.',
      'Explore AI engineering concepts including prompt engineering, context-driven workflows, LLM application testing and evaluation, and AI agent-based automation.',
      'Apply AI-assisted approaches to improve engineering productivity, streamline repetitive QA activities and optimize testing workflows.',
      'Build cloud computing knowledge across Google Cloud Platform (GCP), AWS and Microsoft Azure, with a focus on cloud services and application environments.',
      'Develop an understanding of cloud-based application architecture, deployment environments and their role in modern software engineering.',
      'Collaborate with team members, support knowledge sharing and mentor junior engineers.',
    ],
  },
]


// function CursorWaves() {
//   useEffect(() => {
//     if (
//       window.matchMedia('(pointer: coarse)').matches ||
//       window.matchMedia('(prefers-reduced-motion: reduce)').matches
//     ) return

//     let lastX = 0
//     let lastY = 0
//     let lastTime = 0

//     const handlePointerMove = (event: PointerEvent) => {
//       const now = performance.now()
//       const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY)
//       if (distance < 22 || now - lastTime < 35) return

//       lastX = event.clientX
//       lastY = event.clientY
//       lastTime = now

//       const wave = document.createElement('span')
//       wave.className = 'cursor-wave'
//       wave.style.left = `${event.clientX}px`
//       wave.style.top = `${event.clientY}px`
//       document.body.appendChild(wave)
//       wave.addEventListener('animationend', () => wave.remove(), { once: true })
//     }

//     window.addEventListener('pointermove', handlePointerMove, { passive: true })
//     return () => {
//       window.removeEventListener('pointermove', handlePointerMove)
//       document.querySelectorAll('.cursor-wave').forEach((wave) => wave.remove())
//     }
//   }, [])

//   return null
// }

function CursorGlow() {
  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Quality Engineering', 'Android', 'Workplace']
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Quality Engineering') return project.category.includes('QUALITY ENGINEERING')
    if (activeFilter === 'Android') return project.category.includes('ANDROID')
    return project.category.includes('WORKPLACE')
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <CustomCursor />
      <CursorGlow />
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>LK<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-resume" href="/resume.pdf" download="Lakshya_Kumar_Yadav_Resume.pdf">Download Resume <ArrowDown size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO EXPLORING OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>  Lakshya Kumar<br />
              <span>Yadav
                <span className="blink-dot">.</span>
              </span>
            </h1>
            <h2>Automation Engineer <i>|</i> AI &amp; Cloud Engineering</h2>
            <p className="hero-description">
              I build reliable automation solutions and explore how AI can make software engineering
              and quality practices more effective. My work spans web, mobile and API automation,
              with a growing focus on AI-assisted engineering and cloud technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href={`mailto:${links.email}`}>Get in touch <Mail size={16} /></a>
            </div>
            <div className="social-links">
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={links.credly} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Certifications</a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="profile-card">
              <div className="profile-monogram">LKY</div>

              <div className="profile-card-bottom">
                <span>ENGINEERING MINDSET</span>
                <strong className="profile-tagline">
                  <span>Learn.</span>
                  <span>Build.</span>
                  <br className="tagline-break" />
                  <span>Test.</span>
                  <span>Improve.</span>
                </strong>
              </div>

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section section-muted" id="about">
          <div className="container two-column">
            <div>
              <p className="section-label">01 / ABOUT</p>
              <h2 className="section-title">Engineering quality.<br /><span>Exploring what's next.</span></h2>
            </div>
            <div className="about-copy">
              <p className="lead">I’m an Artificial Intelligence-enabled Automation Engineer focused on building reliable automation solutions and improving software quality through thoughtful use of technology.</p>
              <p>My skills span web, mobile and API test automation, automation framework development, functional and regression testing, test planning, defect analysis and CI/CD workflows. I work with technologies including Java, JavaScript, TypeScript, Node.js, Selenium, Appium, Cucumber, REST API testing and related engineering tools.</p>
              <p>I’m continuously expanding my knowledge of AI-assisted software engineering, LLM application testing and evaluation, prompt engineering, AI agents, Model Context Protocol (MCP), and cloud platforms such as Google Cloud (GCP), AWS and Azure.</p>
              <section className="engineering-approach">
              <p className="approach-heading">┃ MY ENGINEERING APPROACH</p>

              <div className="approach-animation">
                <span className="approach-text">
                  Learn → Build → Test → Measure → Improve
                </span>
              </div>
              </section>
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <p className="section-label">02 / EXPERIENCE</p>
          <div className="section-heading-row">
            <h2 className="section-title">Where I've <span>contributed.</span></h2>
            <span className="section-aside">Professional journey</span>
          </div>
          {experience.map((job) => (
            <article className="experience-card" key={job.company}>
              <div className="experience-meta">
                <div className="company-mark">A</div>
                <div><h3>{job.company}</h3><span>{job.type}</span></div>
              </div>
              <div className="experience-detail">
                <h3>{job.role}</h3>
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <p className="section-label">03 / TOOLKIT</p>
            <div className="section-heading-row">
              <h2 className="section-title">Tools I work <span>with.</span></h2>
              <span className="section-aside">A growing toolkit</span>
            </div>
            <div className="skills-grid">
  {skills.map(({ title, icon: Icon, items }) => (
    <article className="skill-card" key={title}>
      <div className="skill-heading">
        <span className="skill-icon">
          <Icon size={19} />
        </span>

        <h3 className="baseline-animation">{title}</h3>
      </div>

      <div className="tag-list">
        {items.map((item) => (
          <span className="tag" key={item}>{item}</span>
        ))}
      </div>
    </article>
  ))}
</div>
          </div>
        </section>

        <section className="section container" id="projects">
          <p className="section-label">04 / SELECTED WORK</p>
          <div className="section-heading-row">
            <h2 className="section-title">Projects &amp; <span>contributions.</span></h2>
            <span className="section-aside">Things I've built and improved</span>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="projects-grid">
            {filteredProjects.map(({ number, category, title, description, tags, note, icon: Icon }) => (
              <article className="project-card" key={title}>
                <div className="project-top"><span>{number} / 05</span><Icon size={21} /></div>
                <p className="project-category">{category}</p>
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <div className="tag-list">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <p className="project-note">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="learning">
          <div className="container learning-layout">
            <div>
              <p className="section-label">05 / CONTINUOUS LEARNING</p>
              <h2 className="section-title">Curious by nature.<br /><span>Intentional by practice.</span></h2>
            </div>
            <div className="learning-list">
              {['AI-assisted software engineering & developer productivity', 'LLM application testing, evaluation & reliability', 'Agentic AI architectures, tools & workflows', 'MCP integrations and prompt engineering', 'Responsible AI: security, accountability, resilience & accessibility', 'Cloud engineering across GCP, AWS and Azure'].map((item, i) => (
                <div className="learning-item" key={item}><span>0{i + 1}</span><p>{item}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <p className="section-label">06 / CONTACT</p>
          <h2 className="section-title">Have an opportunity<br />or idea? <span>Let's connect.</span></h2>
          <p className="contact-copy">I'm interested in opportunities where I can contribute to quality engineering, automation and AI-driven software practices while continuing to grow as an engineer.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${links.email}`}>Say hello <Mail size={16} /></a>
            <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-details"><span><Mail size={16} /> {links.email}</span><span><Globe2 size={16} /> India</span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">LK<span>.</span></a>
          <p>Designed with purpose. Built to keep learning.</p>
          <div className="footer-social"><a href={links.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a><a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a></div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} Lakshya Kumar Yadav. All rights reserved.</div>
      </footer>
    </>
  )
}



export default App
