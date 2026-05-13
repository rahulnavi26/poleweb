import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const categories = ['All', 'Web Dev', 'UI/UX', 'Mobile', 'Branding']

const projects = [
  { id: 1, title: 'FinEdge Dashboard', category: 'UI/UX', tags: ['Figma','React','Finance'], color: 'linear-gradient(135deg,#4F8EF7,#6C63FF)', emoji: '📊', desc: 'A real-time financial analytics platform with rich data visualization and intuitive UX for enterprise users.' },
  { id: 2, title: 'GreenLeaf eCommerce', category: 'Web Dev', tags: ['Next.js','Node.js','MongoDB'], color: 'linear-gradient(135deg,#10B981,#4F8EF7)', emoji: '🌿', desc: 'Full-stack e-commerce platform achieving ₹2Cr+ in monthly GMV with 99.9% uptime.' },
  { id: 3, title: 'TravelKit App', category: 'Mobile', tags: ['React Native','Firebase'], color: 'linear-gradient(135deg,#6C63FF,#EC4899)', emoji: '✈️', desc: 'Award-winning travel companion app with offline maps, AI itineraries, and real-time collaboration.' },
  { id: 4, title: 'PureGold Rebrand', category: 'Branding', tags: ['Brand Identity','Figma'], color: 'linear-gradient(135deg,#F59E0B,#EF4444)', emoji: '✦', desc: 'Complete brand overhaul for a luxury jewellery brand — from visual identity to digital presence.' },
  { id: 5, title: 'MedTrack Portal', category: 'Web Dev', tags: ['React','PostgreSQL','AWS'], color: 'linear-gradient(135deg,#00D4FF,#10B981)', emoji: '🏥', desc: 'HIPAA-compliant medical records portal serving 50,000+ patients across 30 hospitals.' },
  { id: 6, title: 'SkyLine Real Estate', category: 'UI/UX', tags: ['Figma','Three.js'], color: 'linear-gradient(135deg,#4F8EF7,#00D4FF)', emoji: '🏙️', desc: 'Immersive real estate platform with 3D property tours, virtual staging, and AI price predictions.' },
]

const metrics = [
  { label: 'Conversion uplift', value: '28%' },
  { label: 'Launch velocity', value: '8 weeks' },
  { label: 'Retention lift', value: '95%' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="portfolio-page">
      <section className="page-hero" id="portfolio-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container page-hero__content">
          <span className="section-label">Our Work</span>
          <h1 className="page-hero__title">
            Crafted with Purpose, <span>Built to Perform</span>
          </h1>
          <p className="page-hero__subtitle">
            A selection of projects where strategy, design, and engineering converge to create extraordinary digital results.
          </p>
        </div>
      </section>

      <section className="portfolio-grid-section" id="portfolio-section">
        <div className="container">
          <div className="portfolio-summary">
            <div className="portfolio-summary__card">
              <span className="portfolio-summary__value">{projects.length}+</span>
              <span className="portfolio-summary__label">Featured Projects</span>
            </div>
            <div className="portfolio-summary__card">
              <span className="portfolio-summary__value">{categories.length}</span>
              <span className="portfolio-summary__label">Service Categories</span>
            </div>
            <div className="portfolio-summary__card">
              <span className="portfolio-summary__value">40+</span>
              <span className="portfolio-summary__label">Global Clients</span>
            </div>
          </div>

          <div className="portfolio-highlights">
            {metrics.map(({ label, value }) => (
              <div key={label} className="portfolio-highlights__item">
                <span className="portfolio-highlights__value">{value}</span>
                <span className="portfolio-highlights__label">{label}</span>
              </div>
            ))}
          </div>

          <div className="portfolio__top">
            <div className="portfolio__top-copy">
              <p className="portfolio__top-label">Featured Work</p>
              <h2 className="portfolio__top-title">Designs, platforms and brands built for conversion.</h2>
            </div>
            <Link to="/contact" className="btn-primary portfolio__top-cta">Share Your Brief</Link>
          </div>

          {/* Filter tabs */}
          <div className="portfolio__filters" id="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s/g,'-')}`}
                className={`portfolio__filter-btn ${active === cat ? 'portfolio__filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="portfolio__notice">Every featured project is built to create measurable impact—faster launch cycles, stronger customer connections, and higher lifetime value.</p>

          {/* Projects grid */}
          <div className="portfolio__grid" id="portfolio-grid">
            {filtered.map(({ id, title, category, tags, color, emoji, desc }) => (
              <article key={id} className="project-card glass-card" id={`project-${id}`}>
                <div className="project-card__accent" style={{ background: color }} />
                <div className="project-card__thumb" style={{ background: color }}>
                  <span className="project-card__emoji">{emoji}</span>
                  <span className="project-card__category">{category}</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{title}</h3>
                  <p className="project-card__desc">{desc}</p>
                  <div className="project-card__tags">
                    {tags.map(t => (
                      <span key={t} className="project-card__tag">{t}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="project-card__link" id={`project-link-${id}`}>
                    View Case Study
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolio__footer">
            <div>
              <span className="portfolio__footer-label">Want this level of quality?</span>
              <h3 className="portfolio__footer-title">Let’s turn your next idea into a market-winning product.</h3>
            </div>
            <Link to="/contact" className="btn-secondary portfolio__footer-cta">Let’s Talk</Link>
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign:'center', color:'var(--gray-400)', padding:'80px 0' }}>No projects in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
