import './About.css'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Arjun Rao',     role: 'CEO & Founder',      emoji: '👨‍💼', bio: 'Visionary leader with 12+ years in digital strategy and product development.' },
  { name: 'Priya Menon',   role: 'Creative Director',   emoji: '👩‍🎨', bio: 'Award-winning designer with a passion for creating experiences that move people.' },
  { name: 'Karan Sethi',   role: 'Lead Developer',      emoji: '👨‍💻', bio: 'Full-stack architect who has shipped 150+ production apps across 3 continents.' },
  { name: 'Sneha Kapoor',  role: 'Growth Strategist',   emoji: '👩‍🚀', bio: 'Data-driven marketer who has scaled brands from ₹0 to ₹10Cr+ ARR.' },
  { name: 'Dev Sharma',    role: 'Mobile Lead',         emoji: '👨‍🔧', bio: 'React Native & Flutter expert with apps downloaded 2M+ times globally.' },
  { name: 'Ananya Singh',  role: 'Brand Strategist',    emoji: '👩‍💼', bio: 'Brand storyteller who has repositioned 40+ companies across India and the Gulf.' },
]

const values = [
  { icon: '🎯', title: 'Excellence First',    desc: 'We never ship mediocre work. Quality is non-negotiable in everything we deliver.' },
  { icon: '🤝', title: 'True Partnership',    desc: 'Your success is our success. We\'re invested in your long-term growth, not just a project.' },
  { icon: '⚡', title: 'Speed with Precision', desc: 'We move fast without breaking things — agile processes, rigorous quality checks.' },
  { icon: '🔍', title: 'Radical Transparency', desc: 'No surprises. Clear communication, honest timelines, and open collaboration always.' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero" id="about-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container page-hero__content">
          <span className="section-label">About PoleWeb</span>
          <h1 className="page-hero__title">
            Built by Builders, <span>For Businesses</span>
          </h1>
          <p className="page-hero__subtitle">
            We are a team of passionate designers, engineers, and strategists united by a single mission:
            to build digital solutions that create real-world impact.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story" id="about-story">
        <div className="container about-story__inner">
          <div className="about-story__image-wrap animate-float">
            <img src="/about_team.png" alt="PoleWeb team" className="about-story__img" />
          </div>
          <div className="about-story__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">From a Startup Dream to <span>Industry Leaders</span></h2>
            <p className="about-story__text">
              PoleWeb was founded in 2017 with a bold vision: to make world-class digital expertise
              accessible to ambitious businesses of all sizes. What started as a two-person studio
              in Hyderabad has grown into a full-service digital agency trusted by 500+ clients
              across India, the Middle East, and Europe.
            </p>
            <p className="about-story__text">
              We believe that great digital products are born at the intersection of business strategy,
              beautiful design, and flawless engineering. That's the PoleWeb promise — and we've
              delivered on it every single time.
            </p>
            <div className="about-story__stats" id="about-stats">
              {[
                { val: '2017', label: 'Founded' },
                { val: '500+', label: 'Projects' },
                { val: '40+', label: 'Team Members' },
                { val: '15+', label: 'Industries' },
              ].map(({ val, label }) => (
                <div key={label} className="about-story__stat">
                  <span className="about-story__stat-val">{val}</span>
                  <span className="about-story__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core <span>Values</span></h2>
          </div>
          <div className="values__grid" id="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="value-card glass-card" id={`value-${title.replace(/\s+/g,'-').toLowerCase()}`}>
                <span className="value-card__icon">{icon}</span>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Dream Team</span>
            <h2 className="section-title">Meet the <span>Makers</span></h2>
            <p className="section-subtitle">The talented people behind every pixel and every line of code.</p>
          </div>
          <div className="team__grid" id="team-grid">
            {team.map(({ name, role, emoji, bio }) => (
              <div key={name} className="team-card glass-card" id={`team-${name.replace(/\s+/g,'-').toLowerCase()}`}>
                <div className="team-card__avatar">{emoji}</div>
                <h3 className="team-card__name">{name}</h3>
                <span className="team-card__role">{role}</span>
                <p className="team-card__bio">{bio}</p>
              </div>
            ))}
          </div>
          <div className="team__cta">
            <p className="team__cta-text">Want to join our team?</p>
            <Link to="/contact" className="btn-primary" id="team-join-cta">We're Hiring!</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
