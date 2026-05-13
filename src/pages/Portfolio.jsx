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

          {/* Projects grid */}
          <div className="portfolio__grid" id="portfolio-grid">
            {filtered.map(({ id, title, category, tags, color, emoji, desc }) => (
              <article key={id} className="project-card glass-card" id={`project-${id}`}>
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

          {filtered.length === 0 && (
            <p style={{ textAlign:'center', color:'var(--gray-400)', padding:'80px 0' }}>No projects in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
