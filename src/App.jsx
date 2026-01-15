import { useState, useEffect } from 'react'
import './App.css'
import profileImage from './assets/image.png'

const Terminal = () => {
  const [text, setText] = useState('')
  const fullText = "Building intelligent systems with style..."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
        <div className="terminal-title">sajib@dev:~/portfolio</div>
      </div>
      <div className="terminal-body">
        <div className="command">
          <span className="prompt">sajib@dev:~$</span>
          <span>whoami</span>
        </div>
        <div className="command">
          <span className="output">{'>'} AI Engineer</span>
          <span className="output">{'>'} Full-Stack Developer</span>
          <span className="output">{'>'} Problem Solver</span>
        </div>
        <div className="command">
          <span className="prompt">sajib@dev:~$</span>
          <span className="typing-text">{text}</span>
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  )
}

const ViewCounter = () => {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/sajibsahacsedu/resume/up')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error("Counter Error:", err))
  }, [])

  if (count === null) return null

  return (
    <div className="view-counter">
      <span className="label">VISITS:</span>
      <span className="count">{count.toString().padStart(6, '0')}</span>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200) // 2.2s intro
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className={`retro-container ${loading ? '' : 'loaded'}`}>
      {/* Intro Overlay */}
      <div className={`intro-overlay ${loading ? '' : 'fade-out'}`}>
        <div className="intro-text glitch" data-text="SYSTEM INITIALIZING...">SYSTEM INITIALIZING...</div>
      </div>

      <div className="scanlines"></div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand glitch" data-text="SAJIB.DEV">SAJIB.DEV</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'Experience', 'Education', 'Projects', 'Research', 'Achievements'].map((item) => (
            <button
              key={item}
              className={`nav-item ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => {
                scrollToSection(item.toLowerCase())
                setMenuOpen(false)
              }}
            >
              {item.toUpperCase()}
            </button>
          ))}
          <a href="mailto:sajibsaha3464@gmail.com" className="nav-cta" onClick={() => setMenuOpen(false)}>HIRE ME</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">AI ENGINEER & FULL-STACK DEV</div>
          <h1 className="hero-title">
            BUILDING <span className="highlight-pink">INTELLIGENT</span> SYSTEMS WITH <span className="highlight-blue">STYLE</span>.
          </h1>
          <p className="hero-bio">
            I'm <strong>Sajib Saha</strong>. I bridge the gap between complex AI models
            and polished user experiences. From training LLMs at Scale AI to building
            smart cities tech.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/Sajibsahacsedu" target="_blank" rel="noreferrer" className="btn btn-primary">
              <i className="icon">gh</i> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/sajib-saha-32159728a" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <i className="icon">in</i> LINKEDIN
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Terminal />
        </div>
      </header>

      <main className="main-content">
        {/* Experience Section */}
        <section id="experience" className="section-block theme-yellow">
          <div className="section-header">
            <h2>EXPERIENCE LOG</h2>
            <div className="line-decoration"></div>
          </div>

          <div className="experience-grid">
            <div className="xp-card">
              <div className="xp-date">FEB 2025 — AUG 2025</div>
              <h3>AI Trainer</h3>
              <div className="xp-company">SCALE AI</div>
              <p>Training frontier models (GPT-4, Gemini) via RLHF. enhancing reasoning capabilities and code generation.</p>
              <div className="tags">
                <span>RLHF</span><span>LLMs</span><span>Python</span>
              </div>
            </div>

            <div className="xp-card">
              <div className="xp-date">MAR 2025 — JUN 2025</div>
              <h3>Data Specialist</h3>
              <div className="xp-company">SUPERANNOTATE</div>
              <p>Ensured high-quality training data for CV pipelines. Built custom frontend tools for annotation validation.</p>
              <div className="tags">
                <span>Computer Vision</span><span>JavaScript</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-block theme-purple">
          <div className="section-header">
            <h2>EDUCATION</h2>
            <div className="line-decoration"></div>
          </div>

          <div className="experience-grid">
            <div className="xp-card">
              <div className="xp-date">JAN 2022 — DEC 2025</div>
              <h3>University of Dhaka</h3>
              <div className="xp-company">B.Sc. in Computer Science and Engineering</div>
              <p>Relevant Coursework: Data Structures, Algorithms, Databases, Machine Learning, Computer Networks, Software Engineering</p>
            </div>

            <div className="xp-card">
              <div className="xp-date">JUL 2018 — APR 2020</div>
              <h3>Government Rajendra College, Faridpur</h3>
              <div className="xp-company">Higher Secondary Certificate (HSC)</div>
              <p>Relevant Coursework: Mathematics, Physics, Chemistry, C Programming</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-block theme-blue">
          <div className="section-header">
            <h2>PROJECT ARCHIVE</h2>
            <div className="line-decoration"></div>
          </div>

          <div className="project-grid">
            <div className="project-card pop-in">
              <div className="card-top">
                <h3>Skill Bridge</h3>
                <span className="icon">🚀</span>
              </div>
              <p>AI-powered career roadmap generator using OpenAI.</p>
              <div className="tech-stack">
                <span>React</span><span>FastAPI</span><span>AI</span>
              </div>
              <a href="https://github.com/Sajibsahacsedu/Skill_Bridge.git" target="_blank" className="link-arrow">VIEW CODE &rarr;</a>
            </div>

            <div className="project-card pop-in">
              <div className="card-top">
                <h3>ZeroBin</h3>
                <span className="icon">♻️</span>
              </div>
              <p>Smart waste management system with real-time analytics.</p>
              <div className="tech-stack">
                <span>PostgreSQL</span><span>IoT</span>
              </div>
              <a href="https://github.com/Javafest-2025" target="_blank" className="link-arrow">VIEW CODE &rarr;</a>
            </div>

            <div className="project-card pop-in">
              <div className="card-top">
                <h3>RedDrops</h3>
                <span className="icon">🩸</span>
              </div>
              <p>Real-time blood donation coordination app.</p>
              <div className="tech-stack">
                <span>Flutter</span><span>Firebase</span>
              </div>
              <a href="https://github.com/Sajibsahacsedu/RedDrops" target="_blank" className="link-arrow">VIEW CODE &rarr;</a>
            </div>

            <div className="project-card pop-in">
              <div className="card-top">
                <h3>Road AI</h3>
                <span className="icon">🛣️</span>
              </div>
              <p>Hybrid CNN + and Vision Transformer detection pipeline.</p>
              <div className="tech-stack">
                <span>PyTorch</span><span>Deep Learning</span>
              </div>
              <a href="https://github.com/Sajibsahacsedu/RoadClassification" target="_blank" className="link-arrow">VIEW CODE &rarr;</a>
            </div>
          </div>
        </section>

        {/* Research / Skills */}
        <section id="research" className="section-block theme-pink">
          <div className="split-layout">
            <div className="text-col">
              <h2>RESEARCH</h2>
              <div className="research-item">
                <h3>Polygonal Road Damage Detection</h3>
                <p>Published a novel approach using polygonal annotations for smarter city infrastructure.</p>
                <a href="https://arxiv.org/abs/2510.03797" className="bg-link">READ PAPER</a>
              </div>
              <div className="research-item">
                <h3>Decentralized MEC Offloading</h3>
                <p>Using Multi-Agent RL to optimize edge computing resources. (Ongoing)</p>
              </div>
            </div>
            <div className="skills-col">
              <h2>TECH ARSENAL</h2>
              <div className="arsenal-grid">
                {['Python', 'C++', 'JavaScript', 'React', 'Node.js', 'PyTorch', 'SQL', 'Docker', 'AWS', 'Git'].map(skill => (
                  <div key={skill} className="skill-pill">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section-block theme-yellow">
          <div className="section-header">
            <h2>ACHIEVEMENTS</h2>
            <div className="line-decoration"></div>
          </div>

          <div className="experience-grid">
            <div className="xp-card">
              <div className="xp-date">10TH PLACE</div>
              <h3>IIUC AI Hackathon</h3>
              <p>100+ teams; computer vision and AI challenges.</p>
            </div>

            <div className="xp-card">
              <div className="xp-date">FINALIST</div>
              <h3>UAP Hackathon</h3>
              <p>Demonstrated rapid prototyping skills.</p>
            </div>

            <div className="xp-card">
              <div className="xp-date">2ND ROUND</div>
              <h3>Therap JavaFest</h3>
              <p>Selected for backend problem solving.</p>
            </div>

            <div className="xp-card">
              <div className="xp-date">FINALIST</div>
              <h3>IIT UI/UX Design</h3>
              <p>Competition for user-centric interfaces.</p>
            </div>

            <div className="xp-card">
              <div className="xp-date">PARTICIPANT</div>
              <h3>Robi Ideathon</h3>
              <p>Innovative digital solutions challenge.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-retro">
        <div className="footer-content">
          <h3>LET'S BUILD SOMETHING COOL.</h3>
          <p>Available for opportunities.</p>
          <div className="social-links">
            <a href="mailto:sajibsaha3464@gmail.com">EMAIL</a>
            <a href="https://github.com/Sajibsahacsedu">GITHUB</a>
            <a href="https://www.linkedin.com/in/sajib-saha-32159728a">LINKEDIN</a>
          </div>
          <div className="copyright">© {new Date().getFullYear()} SAJIB SAHA_</div>
          <ViewCounter />
        </div>
      </footer>
    </div>
  )
}

export default App
