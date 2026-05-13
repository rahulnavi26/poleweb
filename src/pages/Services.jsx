import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: '◈', title: 'Web Development',
    gradient: 'linear-gradient(135deg, #4F8EF7, #6C63FF)',
    desc: 'We craft blazing-fast, responsive web applications using React, Next.js, Node.js, and modern cloud infrastructure. Every project is built for performance, scalability, and conversions.',
    features: ['React & Next.js', 'Node.js Backend', 'REST & GraphQL APIs', 'Cloud Deployment', 'Performance Optimization', 'E-Commerce Solutions'],
  },
  {
    icon: '◉', title: 'UI/UX Design',
    gradient: 'linear-gradient(135deg, #00D4FF, #4F8EF7)',
    desc: 'Pixel-perfect, research-driven design that puts your users first. We create intuitive journeys that keep visitors engaged and convert them into loyal customers.',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Figma Handoff', 'A/B Testing', 'Accessibility (WCAG)'],
  },
  {
    icon: '◎', title: 'SEO & Growth',
    gradient: 'linear-gradient(135deg, #10B981, #4F8EF7)',
    desc: 'Dominate search rankings and grow your organic traffic with our proven SEO frameworks, technical audits, and content strategies tailored to your market.',
    features: ['Technical SEO Audit', 'On-page Optimization', 'Link Building', 'Content Strategy', 'Local SEO', 'Analytics & Reporting'],
  },
  {
    icon: '⬡', title: 'Brand Identity',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    desc: 'Your brand is more than a logo. We craft cohesive brand identities — visual language, tone, and strategy — that make you instantly recognizable and unforgettable.',
    features: ['Logo Design', 'Brand Guidelines', 'Typography System', 'Color Palette', 'Brand Collateral', 'Rebranding Strategy'],
  },
  {
    icon: '◫', title: 'Mobile Apps',
    gradient: 'linear-gradient(135deg, #6C63FF, #EC4899)',
    desc: 'Native and cross-platform mobile apps built with React Native and Flutter that deliver seamless experiences across iOS and Android with enterprise-grade reliability.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Deployment'],
  },
  {
    icon: '⬢', title: 'Cloud Solutions',
    gradient: 'linear-gradient(135deg, #00D4FF, #10B981)',
    desc: 'Architecting scalable, secure cloud solutions on AWS, GCP, and Azure. From serverless functions to microservices, we future-proof your infrastructure.',
    features: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Database Architecture', 'Monitoring & Alerts', 'Security & Compliance'],
  },
]

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend & Languages',
    color: '#1D4ED8',
    techs: [
      { name: 'JavaScript',   icon: '🟨', bg: '#F7DF1E' },
      { name: 'TypeScript',   icon: '🔷', bg: '#3178C6' },
      { name: 'HTML',         icon: '🟧', bg: '#E34F26' },
      { name: 'CSS',          icon: '💙', bg: '#1572B6' },
      { name: 'React',        icon: '⚛️', bg: '#61DAFB' },
      { name: 'Redux Toolkit',icon: '🔮', bg: '#764ABC' },
      { name: 'Next.js',      icon: '◼', bg: '#000000' },
      { name: 'jQuery',       icon: '🔵', bg: '#0769AD' },
      { name: 'Tailwind CSS', icon: '🌊', bg: '#06B6D4' },
      { name: 'Figma',        icon: '🎨', bg: '#F24E1E' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    color: '#1D4ED8',
    techs: [
      { name: 'Node.js',      icon: '🟢', bg: '#339933' },
      { name: 'Express.js',   icon: '🖤', bg: '#000000' },
      { name: 'Prisma ORM',   icon: '▲',  bg: '#2D3748' },
      { name: 'MongoDB',      icon: '🍃', bg: '#47A248' },
      { name: 'Firebase',     icon: '🔥', bg: '#FFCA28' },
      { name: 'Redis',        icon: '🔴', bg: '#DC382D' },
      { name: 'GraphQL',      icon: '⬡',  bg: '#E10098' },
      { name: 'PostgreSQL',   icon: '🐘', bg: '#4169E1' },
      { name: 'Nginx',        icon: '🌐', bg: '#009900' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Version Control',
    color: '#1D4ED8',
    techs: [
      { name: 'Git',            icon: '🔶', bg: '#F05032' },
      { name: 'GitHub',         icon: '🐙', bg: '#181717' },
      { name: 'Docker',         icon: '🐳', bg: '#2496ED' },
      { name: 'GitHub Actions', icon: '⚙️', bg: '#2088FF' },
    ],
  },
  {
    id: 'cms',
    title: 'CMS & Cloud',
    color: '#1D4ED8',
    techs: [
      { name: 'WordPress', icon: '🔵', bg: '#21759B' },
      { name: 'Shopify',   icon: '🛍️', bg: '#96BF48' },
      { name: 'AWS',       icon: '☁️', bg: '#FF9900' },
    ],
  },
  {
    id: 'os',
    title: 'Operating Systems',
    color: '#1D4ED8',
    techs: [
      { name: 'Linux (Ubuntu)', icon: '🐧', bg: '#E95420' },
    ],
  },
]

export default function Services() {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero" id="services-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container page-hero__content">
          <span className="section-label">What We Offer</span>
          <h1 className="page-hero__title">
            Services That Drive <span>Real Results</span>
          </h1>
          <p className="page-hero__subtitle">
            End-to-end digital services engineered for growth, designed to impress,
            and delivered with precision. Whatever your challenge — we have the expertise.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="svc-list" id="services-list">
        <div className="container">
          {services.map(({ icon, title, gradient, desc, features }, i) => (
            <article
              key={title}
              className={`svc-item ${i % 2 !== 0 ? 'svc-item--reverse' : ''}`}
              id={`svc-${title.replace(/\s+/g,'-').toLowerCase()}`}
            >
              <div className="svc-item__visual">
                <div className="svc-item__icon-wrap" style={{ background: gradient }}>
                  <span className="svc-item__icon">{icon}</span>
                </div>
              </div>
              <div className="svc-item__body">
                <h2 className="svc-item__title">{title}</h2>
                <p className="svc-item__desc">{desc}</p>
                <ul className="svc-item__features">
                  {features.map(f => (
                    <li key={f} className="svc-item__feature">
                      <span className="svc-item__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary svc-item__cta" id={`svc-cta-${i}`}>
                  Get a Quote
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="tech-stack-section" id="tech-stack">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Technologies We <span>Work With</span></h2>
            <p className="section-subtitle">
              We use the best tools in the industry — battle-tested, modern, and chosen for performance.
            </p>
          </div>

          <div className="tech-categories" id="tech-categories">
            {techCategories.map(({ id, title, color, techs }) => (
              <div key={id} className="tech-category-card" id={`tech-cat-${id}`}>
                <h3 className="tech-category__title" style={{ color }}>{title}</h3>
                <div className="tech-category__grid">
                  {techs.map(({ name, icon, bg }) => (
                    <div key={name} className="tech-pill" id={`tech-${name.toLowerCase().replace(/[^a-z0-9]/g,'-')}`}>
                      <span
                        className="tech-pill__icon"
                        style={{ background: bg + '18', border: `1.5px solid ${bg}40` }}
                      >
                        {icon}
                      </span>
                      <span className="tech-pill__name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Proven <span>Process</span></h2>
            <p className="section-subtitle">A transparent, structured workflow that keeps you informed and in control at every step.</p>
          </div>
          <div className="process__steps" id="process-steps">
            {[
              { step: '01', title: 'Discovery', desc: 'We deep-dive into your business goals, target audience, and competitive landscape.' },
              { step: '02', title: 'Strategy', desc: 'We design a tailored roadmap with clear milestones, KPIs, and success metrics.' },
              { step: '03', title: 'Design & Build', desc: 'Our design and engineering teams collaborate to bring your vision to life.' },
              { step: '04', title: 'Launch & Grow', desc: 'We deploy, monitor, and continuously optimize for peak performance.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="process__step glass-card" id={`process-step-${step}`}>
                <span className="process__step-num">{step}</span>
                <h3 className="process__step-title">{title}</h3>
                <p className="process__step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
