import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/* ─── DATA ─────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Projects Delivered',   icon: '🚀' },
  { value: '98%',  label: 'Client Satisfaction',  icon: '⭐' },
  { value: '8+',   label: 'Years of Excellence',  icon: '🏆' },
  { value: '40+',  label: 'Global Clients',        icon: '🌍' },
]

const services = [
  { icon: '⬡', title: 'Web Development',  desc: 'Blazing-fast, scalable web apps built with React, Next.js & Node.js — engineered for performance and conversions.', color: '#4F8EF7' },
  { icon: '◉', title: 'UI/UX Design',     desc: 'Pixel-perfect, research-driven interfaces that delight users and drive measurable business outcomes.', color: '#6C63FF' },
  { icon: '◎', title: 'SEO & Growth',     desc: 'Data-driven strategies that put you at the top of search results and accelerate sustainable organic growth.', color: '#10B981' },
  { icon: '◈', title: 'Brand Identity',   desc: 'Strategic branding — visual language, tone, and positioning — that makes you instantly recognizable.', color: '#F59E0B' },
  { icon: '◫', title: 'Mobile Apps',      desc: 'Native and cross-platform mobile experiences with React Native & Flutter that users love to keep.', color: '#EC4899' },
  { icon: '⬢', title: 'Cloud Solutions',  desc: 'Secure, scalable cloud infrastructure on AWS, GCP & Azure — future-proofing your business from day one.', color: '#00C9A7' },
]

const techRow1 = [
  { name: 'Figma',        icon: '🎨' }, { name: 'JavaScript',   icon: '🟨' },
  { name: 'TypeScript',   icon: '🔷' }, { name: 'HTML5',        icon: '🟧' },
  { name: 'CSS3',         icon: '💙' }, { name: 'React',        icon: '⚛️' },
  { name: 'Redux',        icon: '🔮' }, { name: 'Next.js',      icon: '◼' },
  { name: 'jQuery',       icon: '🔵' }, { name: 'Vue.js',       icon: '💚' },
]
const techRow2 = [
  { name: 'Node.js',      icon: '🟢' }, { name: 'Express.js',   icon: '🖤' },
  { name: 'Prisma ORM',   icon: '▲'  }, { name: 'MongoDB',      icon: '🍃' },
  { name: 'Firebase',     icon: '🔥' }, { name: 'Redis',        icon: '🔴' },
  { name: 'GraphQL',      icon: '⬡'  }, { name: 'PostgreSQL',   icon: '🐘' },
  { name: 'Nginx',        icon: '🌐' }, { name: 'MySQL',        icon: '🐬' },
]
const techRow3 = [
  { name: 'Linux',        icon: '🐧' }, { name: 'Git',          icon: '🔶' },
  { name: 'GitHub',       icon: '🐙' }, { name: 'Docker',       icon: '🐳' },
  { name: 'AWS',          icon: '☁️' }, { name: 'WordPress',    icon: '🔵' },
  { name: 'Shopify',      icon: '🛍️' }, { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Flutter',      icon: '💙' }, { name: 'GitHub Actions', icon: '⚙️' },
]

const testimonials = [
  { name: 'Rajesh Kumar',  role: 'CEO, TechNova India',      quote: 'PoleWeb delivered beyond our expectations. The website they built tripled our lead conversions in just 3 months.', rating: 5 },
  { name: 'Priya Sharma',  role: 'Founder, GreenLeaf Brands', quote: 'Their attention to detail is unmatched. Our brand identity went from ordinary to extraordinary — our customers noticed instantly.', rating: 5 },
  { name: 'Michael Chen',  role: 'CTO, FinEdge Solutions',    quote: 'True professionals. They understood our complex requirements and executed flawlessly. Highly recommend for any serious digital project.', rating: 5 },
]

const clients = ['TechNova','GreenLeaf','FinEdge','SkyLine','MedTrack','PureGold','DataVault','NexGen']

/* ─── COMPONENT ─────────────────────────────── */
export default function Home() {
  const heroRef = useRef(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero__bg-grid" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />

        <div className="container hero__inner">
          {/* LEFT CONTENT */}
          <div className="hero__content">
            <div className="hero__eyebrow" id="hero-eyebrow">
              <span className="hero__eyebrow-dot" />
              Digital Excellence Redefined
            </div>

            <h1 className="hero__title" id="hero-title">
              We Build<br />
              <span className="hero__title-highlight">Digital Experiences</span><br />
              That Matter
            </h1>

            <p className="hero__desc" id="hero-desc">
              PoleWeb engineers powerful, conversion-focused digital solutions.
              From stunning design to robust development — we make your brand
              unforgettable online and unstoppable in the market.
            </p>

            <div className="hero__ctas" id="hero-ctas">
              <Link to="/services" className="btn-primary hero__btn-primary" id="hero-cta-main">
                Explore Services
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link to="/contact" className="hero__btn-ghost" id="hero-cta-ghost">
                Get a Free Quote
              </Link>
            </div>

            {/* Trust strip */}
            <div className="hero__trust" id="hero-trust">
              <div className="hero__trust-avatars">
                {['R','P','M','A','K'].map((l,i) => (
                  <div key={l} className="hero__avatar" style={{ marginLeft: i ? '-10px' : 0 }}>{l}</div>
                ))}
              </div>
              <div className="hero__trust-text">
                <strong>2,000+ clients</strong> across 15+ industries
              </div>
              <div className="hero__trust-divider" />
              <div className="hero__trust-badges">
                <span className="hero__badge">✓ Verified Agency</span>
                <span className="hero__badge">★ Top Rated 2025</span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero__visual" id="hero-visual">
            <div className="hero__card hero__card--main">
              {/* Browser chrome */}
              <div className="hero__browser-bar">
                <span className="hero__dot red"/><span className="hero__dot yellow"/><span className="hero__dot green"/>
                <div className="hero__browser-url">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="#10B981" strokeWidth="2"/></svg>
                  poleweb.com
                </div>
              </div>
              {/* Dashboard mock */}
              <div className="hero__dashboard">
                <div className="hero__dash-header">
                  <span className="hero__dash-title">Project Dashboard</span>
                  <span className="hero__dash-status">● Live</span>
                </div>
                <div className="hero__dash-metrics">
                  {[
                    { label: 'Page Speed', val: '99', unit: '/100', color: '#10B981' },
                    { label: 'SEO Score',  val: '97', unit: '/100', color: '#4F8EF7' },
                    { label: 'Uptime',     val: '99.9', unit: '%',  color: '#F59E0B' },
                  ].map(m => (
                    <div key={m.label} className="hero__metric">
                      <div className="hero__metric-val" style={{ color: m.color }}>{m.val}<span>{m.unit}</span></div>
                      <div className="hero__metric-label">{m.label}</div>
                      <div className="hero__metric-bar">
                        <div className="hero__metric-fill" style={{ width: `${parseFloat(m.val)}%`, background: m.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hero__dash-chart">
                  {[40,65,45,80,60,90,75,95,70,100].map((h,i) => (
                    <div key={i} className="hero__bar" style={{ height: `${h}%`, animationDelay: `${i*0.1}s` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero__badge-float hero__badge-float--1">
              <span className="hero__float-icon">🚀</span>
              <div><p className="hero__float-val">+340%</p><p className="hero__float-sub">Avg. Growth</p></div>
            </div>
            <div className="hero__badge-float hero__badge-float--2">
              <span className="hero__float-icon">🏆</span>
              <div><p className="hero__float-val">Awarded</p><p className="hero__float-sub">Best Agency 2025</p></div>
            </div>
            <div className="hero__badge-float hero__badge-float--3">
              <span className="hero__float-icon">⚡</span>
              <div><p className="hero__float-val">99 ms</p><p className="hero__float-sub">Page Speed</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CLIENT LOGOS
      ══════════════════════════════════════ */}
      <section className="clients-section" id="clients">
        <div className="container">
          <p className="clients__label">Trusted by forward-thinking businesses</p>
          <div className="clients__logos">
            {clients.map(c => (
              <div key={c} className="clients__logo-pill">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section className="stats-section" id="stats">
        <div className="container stats__grid">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="stats__card" id={`stat-${label.replace(/\s+/g,'-').toLowerCase()}`}>
              <span className="stats__icon">{icon}</span>
              <span className="stats__value">{value}</span>
              <span className="stats__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              End-to-End Digital Services<br />Built for <span>Scale & Impact</span>
            </h2>
            <p className="section-subtitle">
              From concept to launch, every solution is engineered to perform,
              designed to impress, and built to grow alongside your business.
            </p>
          </div>
          <div className="svc-grid" id="svc-grid">
            {services.map(({ icon, title, desc, color }) => (
              <article key={title} className="svc-card" id={`svc-${title.replace(/\s+/g,'-').toLowerCase()}`}>
                <div className="svc-card__icon-wrap" style={{ '--svc-color': color }}>
                  <span className="svc-card__icon">{icon}</span>
                </div>
                <h3 className="svc-card__title">{title}</h3>
                <p className="svc-card__desc">{desc}</p>
                <Link to="/services" className="svc-card__link">
                  Learn more
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TECH MARQUEE
      ══════════════════════════════════════ */}
      <section className="marquee-section" id="tech-marquee">
        <div className="container marquee-section__head">
          <span className="section-label">Technologies We Master</span>
        </div>
        {[{ rows: techRow1, dir: 'left' }, { rows: techRow2, dir: 'right' }, { rows: techRow3, dir: 'left', slow: true }].map(({ rows, dir, slow }, ri) => (
          <div key={ri} className="marquee-row" id={`marquee-row-${ri+1}`}>
            <div className={`marquee-track marquee-track--${dir}${slow ? ' marquee-track--slow' : ''}`}>
              {[...rows, ...rows].map((tech, i) => (
                <div key={i} className="marquee-item">
                  <span className="marquee-item__icon">{tech.icon}</span>
                  <span className="marquee-item__name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════
          WHY US
      ══════════════════════════════════════ */}
      <section className="why-section" id="why-us">
        <div className="container why__inner">
          <div className="why__left">
            <span className="section-label">Why PoleWeb</span>
            <h2 className="section-title">Where Strategy<br />Meets <span>Craft</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              We don't just build websites — we engineer digital business assets that generate
              real, measurable results. Every pixel, every line of code, purposefully crafted.
            </p>
            <div className="why__points" id="why-points">
              {[
                { icon: '🎯', title: 'Results-Obsessed',     body: 'We measure success in your ROI, not just deliverables. Every decision is data-backed and goal-driven.' },
                { icon: '⚡', title: 'Lightning Delivery',    body: 'Agile processes mean faster time-to-market without sacrificing an ounce of quality.' },
                { icon: '🔒', title: 'Enterprise Security',   body: 'Bank-grade security practices baked into every solution from architecture to deployment.' },
                { icon: '🤝', title: 'Dedicated Partnership', body: 'A dedicated team for every project — genuinely invested in your long-term success.' },
              ].map(({ icon, title, body }) => (
                <div key={title} className="why__point" id={`why-${title.replace(/\s+/g,'-').toLowerCase()}`}>
                  <div className="why__point-icon">{icon}</div>
                  <div>
                    <h4 className="why__point-title">{title}</h4>
                    <p className="why__point-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary" style={{ marginTop: 8 }} id="why-cta">
              Meet Our Team
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div className="why__right">
            <div className="why__img-wrap animate-float">
              <img src="/about_team.png" alt="PoleWeb team collaborating" className="why__img" />
              <div className="why__img-overlay">
                <div className="why__overlay-stat">
                  <span className="why__overlay-num">8+</span>
                  <span className="why__overlay-label">Years of<br/>Excellence</span>
                </div>
              </div>
            </div>
            {/* Mini achievement cards */}
            <div className="why__achieve">
              {[
                { num: '500+', text: 'Projects Shipped' },
                { num: '40+',  text: 'Enterprise Clients' },
              ].map(({ num, text }) => (
                <div key={num} className="why__achieve-card">
                  <span className="why__achieve-num">{num}</span>
                  <span className="why__achieve-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="testi-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">Trusted by <span>Visionaries</span></h2>
            <p className="section-subtitle">Real results, real people, real impact.</p>
          </div>

          <div className="testi-grid" id="testimonials-grid">
            {testimonials.map(({ name, role, quote, rating }, i) => (
              <div
                key={name}
                className={`testi-card ${i === activeTestimonial ? 'testi-card--active' : ''}`}
                id={`testimonial-${i}`}
                onClick={() => setActiveTestimonial(i)}
              >
                <div className="testi-card__stars">{'★'.repeat(rating)}</div>
                <p className="testi-card__quote">"{quote}"</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar">{name[0]}</div>
                  <div>
                    <p className="testi-card__name">{name}</p>
                    <p className="testi-card__role">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testi-dot ${i === activeTestimonial ? 'testi-dot--active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                id={`testi-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
      <section className="cta-banner" id="cta-banner">
        <div className="cta-banner__orb cta-banner__orb--1" />
        <div className="cta-banner__orb cta-banner__orb--2" />
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">Ready to Build Something <span>Extraordinary?</span></h2>
            <p className="cta-banner__sub">Let's craft your next digital masterpiece. Start with a free consultation today.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="cta-banner__btn-primary" id="cta-banner-main">
              Start a Project
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/services" className="cta-banner__btn-ghost" id="cta-banner-services">
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
