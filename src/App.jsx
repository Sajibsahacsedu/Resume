import { useEffect, useState } from 'react'
import './App.css'
import profileImage from './assets/image.png'

const navigation = [
  { id: 'profile', label: 'Profile' },
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'focus', label: 'Focus' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'leadership', label: 'Leadership' },
]

const profileHighlights = [
  'Computer Science and Engineering student with strong foundations in algorithms, databases, and distributed systems.',
  'Backend and Machine Learning enthusiast experienced in software development, data annotation, and analytical problem-solving.',
  'Passionate about leveraging data-driven approaches to build reliable, scalable, and impactful systems.',
]

const skills = [
  {
    label: 'Languages',
    items: ['Python', 'C/C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Flask', 'Node.js', 'Express.js', 'React.js', 'pandas', 'NumPy'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'REST APIs', 'Linux', 'Jupyter', 'Tailwind CSS'],
  },
  {
    label: 'Core Competencies',
    items: ['Data Analysis', 'Machine Learning', 'Problem Solving', 'Research'],
  },
]

const experiences = [
  {
    company: 'Scale AI',
    role: 'Data Annotation Specialist',
    timeframe: 'Jan 2023 — Dec 2023',
    bullets: [
      'Contributed to large-scale AI/ML projects by annotating and validating datasets for NLP and computer vision tasks.',
      'Maintained over 98% accuracy and consistency across complex annotation workflows.',
    ],
  },
  {
    company: 'SuperAnnotate',
    role: 'AI Data Specialist',
    timeframe: 'Jan 2022 — Dec 2022',
    bullets: [
      'Delivered structured labeling for computer vision pipelines, ensuring data quality for training models.',
      'Collaborated with ML engineers to enhance annotation standards and efficiency.',
    ],
  },
]

const projects = [
  {
    title: 'Road Classification Using Vision Transformers and CNNs (2025)',
    links: [
      { label: 'arXiv Paper', href: 'https://arxiv.org/abs/2510.03797' },
      { label: 'GitHub', href: 'https://github.com/Sajibsahacsedu/RoadClassification' },
    ],
    bullets: [
      'Published a hybrid deep learning architecture combining CNN and Vision Transformer for road-surface classification.',
      'Leveraged transfer learning and augmentation techniques to enhance accuracy on real-world datasets.',
    ],
  },
  {
    title: 'JavaFest 2025 – Eco Waste Management System',
    links: [
      { label: 'GitHub', href: 'https://github.com/Javafest-2025' },
      { label: 'YouTube Demo', href: 'https://youtu.be/mh8ZIMyFH3w?si=v4WSxY7dLPYRRFvH' },
    ],
    bullets: [
      'Built an eco-waste management solution integrating IoT data streams and analytical dashboards for sustainability tracking.',
      'Presented at Therap JavaFest 2025, demonstrating backend optimization and data visualization for smart cities.',
    ],
  },
  {
    title: 'Shopify – Buy Your Shoes (2024)',
    links: [
      { label: 'GitHub', href: 'https://github.com/Sajibsahacsedu/shopify' },
    ],
    bullets: [
      'Developed a full-stack e-commerce platform featuring secure payments, cart management, and order tracking.',
      'Designed a responsive React.js UI and REST APIs in Node.js with a MongoDB backend.',
    ],
  },
  {
    title: 'RedDrops – Blood Donation App (2023)',
    links: [
      { label: 'GitHub', href: 'https://github.com/Sajibsahacsedu/RedDrops' },
      { label: 'Demo', href: 'https://youtu.be/zuT6belzh_k' },
    ],
    bullets: [
      'Created a Flutter mobile app connecting blood donors and recipients using real-time matching and chat.',
      'Integrated authentication, push notifications, and Firebase backend for seamless communication.',
    ],
  },
]

const education = [
  {
    school: 'University of Dhaka',
    credential: 'B.Sc. in Computer Science and Engineering',
    timeframe: 'Jan 2022 — Feb 2026',
    details: [
      'Relevant Coursework: Data Structures, Algorithms, Databases, Machine Learning, Networks, Software Engineering',
    ],
  },
  {
    school: 'Government Rajendra College, Faridpur',
    credential: 'Higher Secondary Certificate (HSC), Grade: A+',
    timeframe: 'Jul 2018 — Apr 2020',
    details: [
      'Relevant Coursework: Mathematics, Physics, Chemistry, C Programming',
    ],
  },
]

const achievements = [
  'Finalist, UAP Hackathon – Built a data-driven full-stack solution under time constraints.',
  'Participant (selected in 2nd round), Therap JavaFest – Contributed to backend and analytical problem-solving.',
  'Finalist, IIT UI/UX Competition – Designed user-centric and accessible digital interfaces.',
  'Participant, Robi Ideathon – Proposed innovative digital engagement solutions.',
]

const leadership = {
  role: 'Co-Founder & Instructor, OCTAGON',
  timeframe: '2024 — Present',
  bullets: [
    'Founded an educational platform with 1500+ students and 5 instructors.',
    'Designed Data Structures and AI curricula; conducted workshops and problem-solving sessions.',
    'Published educational tutorials on YouTube to promote open learning.',
  ],
}

const contactLinks = [
  { label: 'Email', href: 'mailto:sajibsaha3464@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Sajibsahacsedu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sajib-saha-32159728a' },
]

const stats = [
  {
    value: '120+',
    label: 'Datasets Curated',
    caption: 'NLP and CV pipelines at Scale AI & SuperAnnotate',
  },
  {
    value: '8',
    label: 'Products Delivered',
    caption: 'Full-stack, ML, and mobile deployments shipped since 2022',
  },
  {
    value: '98%',
    label: 'Quality Score',
    caption: 'Consistency across complex annotation and QA workflows',
  },
]

const focusAreas = [
  {
    title: 'Backend Systems',
    description:
      'Designing resilient APIs, orchestrating databases, and automating pipelines that keep data flowing.',
    tags: ['Node.js', 'Flask', 'SQL/NoSQL'],
  },
  {
    title: 'Machine Intelligence',
    description:
      'Building hybrid CNN + ViT models, fine-tuning LLM prompts, and validating data for production readiness.',
    tags: ['Vision Transformers', 'Transfer Learning', 'Model QA'],
  },
  {
    title: 'Learning Communities',
    description:
      'Leading OCTAGON workshops, scaling content for 1500+ students, and simplifying complex concepts.',
    tags: ['Curriculum Design', 'Mentorship', 'Community'],
  },
]

const offerings = [
  {
    title: 'Data Confidence',
    points: ['Robust annotation playbooks', 'Feedback loops with ML teams', 'Quality dashboards'],
  },
  {
    title: 'Product Velocity',
    points: ['Rapid prototyping', 'End-to-end delivery', 'Agile iteration with stakeholders'],
  },
  {
    title: 'Human-Centered Solutions',
    points: ['Responsible AI checks', 'Accessible interfaces', 'Impact-focused storytelling'],
  },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [launching, setLaunching] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLaunching(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', launching)
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [launching])

  const closeNav = () => setNavOpen(false)

  return (
    <div className={`app ${launching ? 'launching' : ''}`} id="top">
      {launching && (
        <div className="launch-screen" aria-hidden={!launching}>
          <div className="rocket-container">
            <svg
              className="rocket"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 12c-7.2 9.6-11.3 19.6-12.2 30.1-.5 5.8.5 11.7 2.9 17l-7.3 9.5 7.8 4.5 4.6 10.1h7.4l4.6-10.1 7.8-4.5-7.3-9.5c2.4-5.4 3.4-11.3 2.9-17C59.3 31.6 55.2 21.6 48 12Z"
                fill="var(--white)"
              />
              <circle cx="48" cy="45" r="8" fill="var(--black)" />
              <path
                d="M48 75c-4.5 0-6.5 4.2-6.5 7 0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-2.8-2-7-6.5-7Z"
                fill="var(--yellow)"
              />
            </svg>
            <div className="rocket-smoke">
              <span />
              <span />
              <span />
            </div>
          </div>
          <p>Preparing for launch…</p>
        </div>
      )}

      <header className="top-nav">
        <div className="container nav-bar">
          <a className="brand" href="#top">
            Sajib Saha
          </a>
          <button
            className={`nav-toggle ${navOpen ? 'open' : ''}`}
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={navOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeNav}>
                {item.label}
              </a>
            ))}
            <a href="mailto:sajibsaha3464@gmail.com" className="cta-link" onClick={closeNav}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="profile" className="hero">
          <div className="container hero-layout">
            <div className="hero-text animate">
              <span className="tag">Backend &amp; ML Enthusiast</span>
              <h1>Engineering reliable systems that turn complex data into trusted experiences.</h1>
              <div className="profile-text">
                {profileHighlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
              <div className="contact-buttons">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="button-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  <span className="hero-meta-label">Latest</span>
                  <strong>Road Classification with ViTs</strong>
                  <p>Exploring hybrid architectures to elevate transport safety.</p>
                </div>
                <div className="hero-meta-item">
                  <span className="hero-meta-label">Teaching</span>
                  <strong>OCTAGON sessions</strong>
                  <p>Distilling algorithms and ML fundamentals for 1500+ learners.</p>
                </div>
              </div>
            </div>
            <div className="hero-photo animate" style={{ animationDelay: '0.12s' }}>
              <div className="photo-frame">
                <img src={profileImage} alt="Sajib Saha" loading="lazy" />
              </div>
              <div className="photo-caption">
                <span>Currently crafting backend engines, ML flows, and learning journeys.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="section halo">
          <div className="container">
            <h2 className="section-title">Impact Snapshots</h2>
            <div className="stats-grid">
              {stats.map((item, index) => (
                <article key={item.label} className="stat-card animate" style={{ animationDelay: `${index * 0.08}s` }}>
                  <strong>{item.value}</strong>
                  <h3>{item.label}</h3>
                  <p>{item.caption}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="grid skills-grid">
              {skills.map((group, index) => (
                <article key={group.label} className="panel animate" style={{ animationDelay: `${index * 0.08}s` }}>
                  <h3>{group.label}</h3>
                  <p>{group.items.join(', ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="focus" className="section">
          <div className="container">
            <h2 className="section-title">Focus Areas</h2>
            <div className="focus-grid">
              {focusAreas.map((focus, index) => (
                <article key={focus.title} className="focus-card animate" style={{ animationDelay: `${index * 0.08}s` }}>
                  <span className="focus-accent" aria-hidden="true" />
                  <h3>{focus.title}</h3>
                  <p>{focus.description}</p>
                  <div className="focus-tags">
                    {focus.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">Work Experience</h2>
            <div className="stack">
              {experiences.map((job, index) => (
                <article key={job.company} className="panel animate" style={{ animationDelay: `${index * 0.1 + 0.05}s` }}>
                  <header className="panel-header">
                    <h3>{job.company}</h3>
                    <span className="timeframe">{job.timeframe}</span>
                  </header>
                  <p className="subtitle">{job.role}</p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="offerings" className="section halo">
          <div className="container">
            <h2 className="section-title">What I Bring</h2>
            <div className="offer-grid">
              {offerings.map((offer, index) => (
                <article key={offer.title} className="panel light animate" style={{ animationDelay: `${index * 0.08}s` }}>
                  <h3>{offer.title}</h3>
                  <ul>
                    {offer.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="grid projects-grid">
              {projects.map((project, index) => (
                <article key={project.title} className="panel animate" style={{ animationDelay: `${index * 0.1 + 0.05}s` }}>
                  <header className="panel-header">
                    <h3>{project.title}</h3>
                  </header>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="stack">
              {education.map((entry, index) => (
                <article key={entry.school} className="panel animate" style={{ animationDelay: `${index * 0.1 + 0.05}s` }}>
                  <header className="panel-header">
                    <h3>{entry.school}</h3>
                    <span className="timeframe">{entry.timeframe}</span>
                  </header>
                  <p className="subtitle">{entry.credential}</p>
                  <ul>
                    {entry.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container">
            <h2 className="section-title">Achievements &amp; Certifications</h2>
            <article className="panel animate">
              <ul>
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="leadership" className="section">
          <div className="container">
            <h2 className="section-title">Leadership &amp; Teaching</h2>
            <article className="panel animate">
              <header className="panel-header">
                <h3>{leadership.role}</h3>
                <span className="timeframe">{leadership.timeframe}</span>
              </header>
              <ul>
                {leadership.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="collaborate" className="section cta-section">
          <div className="container cta-wrapper">
            <div className="cta-content animate">
              <span className="tag">Let&apos;s collaborate</span>
              <h2>Looking to build data-hardened products with delightful UX?</h2>
              <p>
                From structured annotation pipelines to production-ready full-stack apps, I help teams move faster
                without compromising on reliability or user trust.
              </p>
              <div className="contact-buttons">
                <a className="button-link primary" href="mailto:sajibsaha3464@gmail.com">
                  Start a conversation
                </a>
                <a className="button-link" href="https://github.com/Sajibsahacsedu" target="_blank" rel="noreferrer">
                  See my code
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Sajib Saha. Crafted with React.</p>
          <a href="#top" className="back-to-top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
