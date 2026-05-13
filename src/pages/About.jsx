import './About.css'
import { Link } from 'react-router-dom'

const stats = [
  { val: '2017', label: 'Founded', icon: '📍' },
  { val: '500+', label: 'Projects Delivered', icon: '🚀' },
  { val: '40+', label: 'Digital Experts', icon: '👥' },
  { val: '15+', label: 'Industries Served', icon: '🌍' },
]

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    desc: 'We focus on clean design, reliable code, and business-ready solutions that create long-term value.',
  },
  {
    icon: '🤝',
    title: 'Partnership Mindset',
    desc: 'We work closely with clients, understand their goals, and build solutions that support real growth.',
  },
  {
    icon: '⚡',
    title: 'Speed with Clarity',
    desc: 'We move fast with clear planning, transparent communication, and structured delivery milestones.',
  },
  {
    icon: '🔍',
    title: 'Transparent Process',
    desc: 'We keep communication simple, timelines clear, and progress visible from discovery to launch.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We understand your business goals, target users, competitors, and technical requirements before planning the solution.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'We create modern interfaces, user flows, brand visuals, and prototypes that make your product easy to use.',
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'We build scalable websites, apps, dashboards, and platforms using reliable modern technologies.',
  },
  {
    step: '04',
    title: 'Deliver',
    desc: 'We test, deploy, optimize, and support your digital product after launch for better performance.',
  },
]

const team = [
  {
    name: 'Strategy Team',
    role: 'Planning & Consulting',
    emoji: '🧠',
    bio: 'Turns business goals into practical digital roadmaps, product plans, and growth strategies.',
  },
  {
    name: 'Design Team',
    role: 'UI/UX & Branding',
    emoji: '🎨',
    bio: 'Creates clean interfaces, design systems, brand visuals, and user-friendly digital experiences.',
  },
  {
    name: 'Development Team',
    role: 'Web, App & Cloud',
    emoji: '💻',
    bio: 'Builds secure, scalable, and performance-focused websites, apps, portals, and dashboards.',
  },
]

const culture = [
  'Client-first communication',
  'Clean and scalable development',
  'Design-led product thinking',
  'Performance-focused delivery',
  'Long-term support mindset',
  'Continuous learning culture',
]

const milestones = [
  {
    year: '2017',
    title: 'Started as a digital studio',
    desc: 'PoleWeb began with a simple mission — help businesses build better online experiences.',
  },
  {
    year: '2020',
    title: 'Expanded into full-service delivery',
    desc: 'We added UI/UX, branding, mobile apps, dashboards, and cloud deployment capabilities.',
  },
  {
    year: '2023',
    title: 'Scaled client partnerships',
    desc: 'Our team supported startups, SMEs, and growing brands across multiple industries.',
  },
  {
    year: 'Today',
    title: 'Building future-ready platforms',
    desc: 'We continue to create digital products focused on usability, performance, and business growth.',
  },
]

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero__dots" />
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />

        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <span className="section-label">About PoleWeb</span>

            <h1 className="about-hero__title">
              We Build Digital Experiences That Help Businesses <span>Grow With Confidence</span>
            </h1>

            <p className="about-hero__subtitle">
              PoleWeb is a digital solutions company focused on websites, mobile
              apps, dashboards, UI/UX design, branding, cloud deployment, and
              growth-focused digital platforms.
            </p>

            <div className="about-hero__actions">
              <Link to="/contact" className="btn-primary about-hero__btn">
                Work With Us
              </Link>
              <a href="#about-story" className="about-hero__ghost">
                Our Story
              </a>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__card">
              <div className="about-hero__card-head">
                <span>Company Snapshot</span>
                <strong>Active</strong>
              </div>

              {stats.map(({ val, label, icon }) => (
                <div key={label} className="about-hero__stat-row">
                  <span className="about-hero__stat-icon">{icon}</span>
                  <div>
                    <h4>{val}</h4>
                    <p>{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-hero__float about-hero__float--1">
              <span>⭐</span>
              <p>98% Satisfaction</p>
            </div>

            <div className="about-hero__float about-hero__float--2">
              <span>🚀</span>
              <p>Growth Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story" id="about-story">
        <div className="container about-story__inner">
          <div className="about-story__image-card">
            <div className="about-story__image-wrap">
              <img src="/about_team.png" alt="PoleWeb team working together" className="about-story__img" />
            </div>

            <div className="about-story__badge">
              <strong>8+ Years</strong>
              <span>Building digital products</span>
            </div>
          </div>

          <div className="about-story__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              From a Small Digital Studio to a <span>Growth-Focused Technology Partner</span>
            </h2>

            <p className="about-story__text">
              PoleWeb started with a clear goal: make professional digital
              solutions accessible to ambitious businesses. Over the years, we
              have helped brands plan, design, develop, launch, and improve
              digital products that support real business outcomes.
            </p>

            <p className="about-story__text">
              We believe great digital products are created when business
              strategy, thoughtful design, and reliable engineering work
              together. That belief guides every website, app, dashboard, and
              platform we build.
            </p>

            <div className="about-story__stats" id="about-stats">
              {stats.map(({ val, label }) => (
                <div key={label} className="about-story__stat">
                  <span className="about-story__stat-val">{val}</span>
                  <span className="about-story__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="about-mission" id="about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__card">
            <span className="about-mission__icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To help businesses build meaningful digital products that improve
              customer experience, simplify operations, and support measurable
              growth.
            </p>
          </div>

          <div className="about-mission__card about-mission__card--dark">
            <span className="about-mission__icon">🌟</span>
            <h3>Our Vision</h3>
            <p>
              To become a trusted digital partner for startups, SMEs, and growing
              brands by delivering practical, scalable, and future-ready
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="about-approach" id="approach">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">
              A Clear Process for <span>Digital Growth</span>
            </h2>
            <p className="section-subtitle">
              Our workflow keeps your project organized, transparent, and aligned
              with your business goals.
            </p>
          </div>

          <div className="approach-grid">
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="approach-card">
                <span className="approach-card__step">{step}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">
              Our Core <span>Values</span>
            </h2>
            <p className="section-subtitle">
              These values guide how we communicate, design, develop, and deliver
              every project.
            </p>
          </div>

          <div className="values__grid" id="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="value-card" id={`value-${title.replace(/\s+/g, '-').toLowerCase()}`}>
                <span className="value-card__icon">{icon}</span>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="culture-section" id="culture">
        <div className="container culture__inner">
          <div className="culture__content">
            <span className="section-label">Our Culture</span>
            <h2 className="section-title">
              A Team Built Around Design, Engineering, and Growth
            </h2>
            <p className="section-subtitle">
              We work with a simple mindset: understand deeply, design clearly,
              build carefully, and keep improving after launch.
            </p>
          </div>

          <div className="culture__grid">
            {culture.map((item) => (
              <div key={item} className="culture-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="milestones-section" id="milestones">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
              Growing Step by Step With <span>Our Clients</span>
            </h2>
          </div>

          <div className="milestones">
            {milestones.map(({ year, title, desc }) => (
              <div key={year} className="milestone-card">
                <span className="milestone-card__year">{year}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">
              Meet the <span>Makers</span>
            </h2>
            <p className="section-subtitle">
              A practical team of strategists, designers, developers, and growth
              thinkers working together to build better digital products.
            </p>
          </div>

          <div className="team__grid" id="team-grid">
            {team.map(({ name, role, emoji, bio }) => (
              <div key={name} className="team-card" id={`team-${name.replace(/\s+/g, '-').toLowerCase()}`}>
                <div className="team-card__avatar">{emoji}</div>
                <h3 className="team-card__name">{name}</h3>
                <span className="team-card__role">{role}</span>
                <p className="team-card__bio">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" id="about-cta">
        <div className="container about-cta__inner">
          <span className="section-label">Build With PoleWeb</span>
          <h2>Have an Idea That Needs a Reliable Digital Team?</h2>
          <p>
            Tell us what you want to build. We’ll help you plan, design, develop,
            launch, and improve it with a clear roadmap.
          </p>

          <div className="about-cta__actions">
            <Link to="/contact" className="about-cta__primary">
              Start a Project
            </Link>
            <Link to="/services" className="about-cta__ghost">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}