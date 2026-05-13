import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const categories = ['All', 'Web Dev', 'UI/UX', 'Mobile', 'Branding', 'Dashboard']

const projects = [
  {
    id: 1,
    title: 'FinEdge Analytics Dashboard',
    category: 'Dashboard',
    industry: 'Finance',
    tags: ['React', 'Figma', 'Charts', 'Finance'],
    color: 'linear-gradient(135deg,#4F8EF7,#6C63FF)',
    emoji: '📊',
    desc:
      'A real-time financial analytics dashboard with KPI tracking, clean data visualization, and enterprise-friendly user flows.',
    metrics: [
      { value: '42%', label: 'Faster reporting' },
      { value: '99%', label: 'Data visibility' },
    ],
  },
  {
    id: 2,
    title: 'GreenLeaf eCommerce Platform',
    category: 'Web Dev',
    industry: 'Retail',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Payments'],
    color: 'linear-gradient(135deg,#10B981,#4F8EF7)',
    emoji: '🌿',
    desc:
      'A scalable eCommerce platform with product management, secure checkout, order tracking, and conversion-focused UX.',
    metrics: [
      { value: '3x', label: 'Lead growth' },
      { value: '99.9%', label: 'Uptime' },
    ],
  },
  {
    id: 3,
    title: 'TravelKit Mobile App',
    category: 'Mobile',
    industry: 'Travel',
    tags: ['React Native', 'Firebase', 'Maps', 'Mobile UX'],
    color: 'linear-gradient(135deg,#6C63FF,#EC4899)',
    emoji: '✈️',
    desc:
      'A travel companion app with itinerary planning, offline access, location-based suggestions, and smooth mobile interactions.',
    metrics: [
      { value: '58%', label: 'More engagement' },
      { value: '4.8/5', label: 'User rating' },
    ],
  },
  {
    id: 4,
    title: 'PureGold Brand Identity',
    category: 'Branding',
    industry: 'Jewellery',
    tags: ['Brand Identity', 'Figma', 'Guidelines', 'Social Kit'],
    color: 'linear-gradient(135deg,#F59E0B,#EF4444)',
    emoji: '✦',
    desc:
      'A complete brand identity system for a premium jewellery business, including logo direction, colors, typography, and digital assets.',
    metrics: [
      { value: '2.4x', label: 'Brand recall' },
      { value: '35%', label: 'Social growth' },
    ],
  },
  {
    id: 5,
    title: 'MedTrack Patient Portal',
    category: 'Web Dev',
    industry: 'Healthcare',
    tags: ['React', 'PostgreSQL', 'AWS', 'Security'],
    color: 'linear-gradient(135deg,#00D4FF,#10B981)',
    emoji: '🏥',
    desc:
      'A secure patient portal for appointment management, records access, role-based dashboards, and admin operations.',
    metrics: [
      { value: '50k+', label: 'Users supported' },
      { value: '65%', label: 'Admin time saved' },
    ],
  },
  {
    id: 6,
    title: 'SkyLine Real Estate Experience',
    category: 'UI/UX',
    industry: 'Real Estate',
    tags: ['Figma', 'UX Research', 'Prototype', 'Design System'],
    color: 'linear-gradient(135deg,#4F8EF7,#00D4FF)',
    emoji: '🏙️',
    desc:
      'A modern property discovery experience with guided search, immersive listing pages, and mobile-first conversion flows.',
    metrics: [
      { value: '48%', label: 'Inquiry growth' },
      { value: '31%', label: 'Bounce drop' },
    ],
  },
]

const summaryStats = [
  { value: '6+', label: 'Featured Projects', icon: '🚀' },
  { value: '5', label: 'Service Categories', icon: '🧩' },
  { value: '40+', label: 'Global Clients', icon: '🌍' },
  { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
]

const portfolioMetrics = [
  { label: 'Average conversion uplift', value: '28%' },
  { label: 'Typical launch timeline', value: '8 weeks' },
  { label: 'Client retention', value: '95%' },
]

const capabilities = [
  'Business Websites',
  'eCommerce Platforms',
  'Admin Dashboards',
  'Mobile Apps',
  'Brand Identity',
  'UI/UX Systems',
  'Cloud Deployment',
  'SEO Foundations',
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    return active === 'All'
      ? projects
      : projects.filter((project) => project.category === active)
  }, [active])

  return (
    <div className="portfolio-page">
      {/* HERO */}
      <section className="portfolio-hero" id="portfolio-hero">
        <div className="portfolio-hero__dots" />
        <div className="portfolio-hero__orb portfolio-hero__orb--1" />
        <div className="portfolio-hero__orb portfolio-hero__orb--2" />

        <div className="container portfolio-hero__inner">
          <div className="portfolio-hero__content">
            <span className="section-label">Our Portfolio</span>

            <h1 className="portfolio-hero__title">
              Digital Products Crafted for <span>Growth, Trust & Performance</span>
            </h1>

            <p className="portfolio-hero__subtitle">
              Explore websites, dashboards, mobile apps, brand systems, and UI/UX
              projects built to solve real business problems and create measurable
              outcomes.
            </p>

            <div className="portfolio-hero__actions">
              <Link to="/contact" className="btn-primary portfolio-hero__btn">
                Start Your Project
              </Link>
              <a href="#portfolio-projects" className="portfolio-hero__ghost">
                View Projects
              </a>
            </div>
          </div>

          <div className="portfolio-hero__visual">
            <div className="portfolio-hero__card">
              <div className="portfolio-hero__card-head">
                <span>Featured Case Studies</span>
                <strong>Live</strong>
              </div>

              {projects.slice(0, 4).map((project) => (
                <div key={project.id} className="portfolio-hero__case">
                  <div
                    className="portfolio-hero__case-icon"
                    style={{ background: project.color }}
                  >
                    {project.emoji}
                  </div>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category} • {project.industry}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="portfolio-hero__float portfolio-hero__float--1">
              <span>📈</span>
              <p>28% Avg. Uplift</p>
            </div>

            <div className="portfolio-hero__float portfolio-hero__float--2">
              <span>⚡</span>
              <p>Fast Launches</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="portfolio-summary-section" id="portfolio-summary">
        <div className="container portfolio-summary">
          {summaryStats.map(({ value, label, icon }) => (
            <div key={label} className="portfolio-summary__card">
              <span className="portfolio-summary__icon">{icon}</span>
              <span className="portfolio-summary__value">{value}</span>
              <span className="portfolio-summary__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="portfolio-results" id="portfolio-results">
        <div className="container portfolio-results__inner">
          <div className="portfolio-results__content">
            <span className="section-label">Measured Impact</span>
            <h2 className="section-title">
              Work That Looks Good and Performs Better
            </h2>
            <p className="section-subtitle">
              Every project is planned around clear goals — better user
              experience, stronger conversion, faster launch cycles, and scalable
              technology.
            </p>
          </div>

          <div className="portfolio-results__grid">
            {portfolioMetrics.map(({ label, value }) => (
              <div key={label} className="portfolio-result-card">
                <span className="portfolio-result-card__value">{value}</span>
                <span className="portfolio-result-card__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="portfolio-projects" id="portfolio-projects">
        <div className="container">
          <div className="portfolio-projects__top">
            <div>
              <span className="section-label">Featured Work</span>
              <h2 className="section-title">
                Case-Study Style Projects Built for <span>Business Results</span>
              </h2>
              <p className="section-subtitle">
                Filter by service category and explore the kind of digital
                solutions we can build for your business.
              </p>
            </div>

            <Link to="/contact" className="btn-primary portfolio-projects__cta">
              Share Your Brief
            </Link>
          </div>

          <div className="portfolio__filters" id="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
                className={`portfolio__filter-btn ${
                  active === cat ? 'portfolio__filter-btn--active' : ''
                }`}
                onClick={() => setActive(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio__grid" id="portfolio-grid">
            {filtered.map(
              ({ id, title, category, industry, tags, color, emoji, desc, metrics }) => (
                <article key={id} className="project-card" id={`project-${id}`}>
                  <div className="project-card__visual" style={{ background: color }}>
                    <span className="project-card__emoji">{emoji}</span>
                    <span className="project-card__category">{category}</span>
                    <span className="project-card__industry">{industry}</span>
                  </div>

                  <div className="project-card__body">
                    <h3 className="project-card__title">{title}</h3>
                    <p className="project-card__desc">{desc}</p>

                    <div className="project-card__metrics">
                      {metrics.map(({ value, label }) => (
                        <div key={label} className="project-card__metric">
                          <strong>{value}</strong>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="project-card__tags">
                      {tags.map((tag) => (
                        <span key={tag} className="project-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact" className="project-card__link">
                      Request Similar Project
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>

          {filtered.length === 0 && (
            <p className="portfolio__empty">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="portfolio-capabilities" id="portfolio-capabilities">
        <div className="container portfolio-capabilities__inner">
          <div className="portfolio-capabilities__content">
            <span className="section-label">What We Can Build</span>
            <h2 className="section-title">
              From Idea to Launch, We Cover the Full Digital Journey
            </h2>
            <p className="section-subtitle">
              If you need a business website, app, dashboard, eCommerce platform,
              or complete brand experience, we can plan and build it with a clear
              execution roadmap.
            </p>
          </div>

          <div className="portfolio-capabilities__grid">
            {capabilities.map((capability) => (
              <div key={capability} className="capability-pill">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta" id="portfolio-cta">
        <div className="container portfolio-cta__inner">
          <span className="section-label">Ready to Build?</span>
          <h2>Have a Project Idea That Needs a Professional Digital Team?</h2>
          <p>
            Share your idea with us. We’ll help you shape it into a website,
            app, dashboard, or digital product with a clean design and scalable
            development plan.
          </p>

          <div className="portfolio-cta__actions">
            <Link to="/contact" className="portfolio-cta__primary">
              Start a Project
            </Link>
            <Link to="/services" className="portfolio-cta__ghost">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}