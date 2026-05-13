import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    gradient: 'linear-gradient(135deg, #4F8EF7, #6C63FF)',
    desc:
      'We build fast, secure, and scalable websites and web applications that help businesses attract users, generate leads, and grow online.',
    features: [
      'React & Next.js Development',
      'Node.js Backend Systems',
      'REST & GraphQL APIs',
      'Admin Panels & Dashboards',
      'Performance Optimization',
      'Cloud Deployment',
    ],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    gradient: 'linear-gradient(135deg, #00D4FF, #4F8EF7)',
    desc:
      'We design clean, modern, and user-friendly interfaces that improve user experience, build trust, and increase conversions.',
    features: [
      'User Research',
      'Wireframes & Prototypes',
      'Figma UI Design',
      'Design Systems',
      'Mobile-First Design',
      'Accessibility Friendly UI',
    ],
  },
  {
    icon: '📈',
    title: 'SEO & Growth',
    gradient: 'linear-gradient(135deg, #10B981, #4F8EF7)',
    desc:
      'We improve your online visibility with technical SEO, content strategy, analytics, and conversion-focused growth planning.',
    features: [
      'Technical SEO Audit',
      'On-Page SEO',
      'Local SEO',
      'Content Strategy',
      'Analytics Setup',
      'Growth Reporting',
    ],
  },
  {
    icon: '✨',
    title: 'Brand Identity',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    desc:
      'We create memorable brand identities that communicate your business clearly and make your company look professional.',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Typography System',
      'Color Palette',
      'Social Media Creatives',
      'Rebranding Strategy',
    ],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    gradient: 'linear-gradient(135deg, #6C63FF, #EC4899)',
    desc:
      'We develop mobile apps for Android and iOS with smooth performance, clean UI, and features built around your business goals.',
    features: [
      'React Native Apps',
      'Flutter Apps',
      'Android & iOS Support',
      'Push Notifications',
      'Offline Support',
      'App Store Deployment',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    gradient: 'linear-gradient(135deg, #00D4FF, #10B981)',
    desc:
      'We help businesses deploy, scale, monitor, and secure their applications using reliable cloud and DevOps practices.',
    features: [
      'AWS / GCP / Azure',
      'CI/CD Pipelines',
      'Docker Setup',
      'Database Architecture',
      'Monitoring & Alerts',
      'Security Best Practices',
    ],
  },
]

const enterpriseSolutions = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    desc:
      'Automate repetitive tasks, build smart workflows, and add AI-powered features to improve productivity.',
  },
  {
    icon: '🛒',
    title: 'eCommerce Development',
    desc:
      'Build online stores with secure payments, product management, order tracking, and conversion-focused checkout.',
  },
  {
    icon: '📊',
    title: 'Business Dashboards',
    desc:
      'Create dashboards that help teams track sales, users, operations, revenue, and performance in real time.',
  },
  {
    icon: '🔐',
    title: 'Secure Web Portals',
    desc:
      'Develop role-based portals for admins, customers, employees, vendors, and internal business teams.',
  },
]

const serviceHighlights = [
  { icon: '🚀', value: '500+', label: 'Projects Delivered' },
  { icon: '⭐', value: '98%', label: 'Client Satisfaction' },
  { icon: '🏆', value: '8+', label: 'Years Experience' },
  { icon: '🌍', value: '40+', label: 'Global Clients' },
]

const industries = [
  'Education',
  'Healthcare',
  'Real Estate',
  'Retail & eCommerce',
  'Finance',
  'Travel',
  'Startups',
  'Local Businesses',
]

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend & Design',
    color: '#1D4ED8',
    techs: [
      { name: 'HTML5', icon: '🟧', bg: '#E34F26' },
      { name: 'CSS3', icon: '💙', bg: '#1572B6' },
      { name: 'JavaScript', icon: '🟨', bg: '#F7DF1E' },
      { name: 'React', icon: '⚛️', bg: '#61DAFB' },
      { name: 'Next.js', icon: '◼', bg: '#000000' },
      { name: 'Tailwind CSS', icon: '🌊', bg: '#06B6D4' },
      { name: 'Figma', icon: '🎨', bg: '#F24E1E' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    color: '#1D4ED8',
    techs: [
      { name: 'Node.js', icon: '🟢', bg: '#339933' },
      { name: 'Express.js', icon: '🖤', bg: '#000000' },
      { name: 'MongoDB', icon: '🍃', bg: '#47A248' },
      { name: 'PostgreSQL', icon: '🐘', bg: '#4169E1' },
      { name: 'Firebase', icon: '🔥', bg: '#FFCA28' },
      { name: 'GraphQL', icon: '⬡', bg: '#E10098' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    color: '#1D4ED8',
    techs: [
      { name: 'Git', icon: '🔶', bg: '#F05032' },
      { name: 'GitHub', icon: '🐙', bg: '#181717' },
      { name: 'Docker', icon: '🐳', bg: '#2496ED' },
      { name: 'AWS', icon: '☁️', bg: '#FF9900' },
      { name: 'GitHub Actions', icon: '⚙️', bg: '#2088FF' },
      { name: 'Linux', icon: '🐧', bg: '#E95420' },
    ],
  },
  {
    id: 'cms',
    title: 'CMS & Commerce',
    color: '#1D4ED8',
    techs: [
      { name: 'WordPress', icon: '🔵', bg: '#21759B' },
      { name: 'Shopify', icon: '🛍️', bg: '#96BF48' },
      { name: 'WooCommerce', icon: '🛒', bg: '#96588A' },
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc:
      'We understand your business, goals, users, competitors, and technical requirements before planning the solution.',
  },
  {
    step: '02',
    title: 'Strategy',
    desc:
      'We prepare a clear roadmap with features, timelines, technology choices, design direction, and success metrics.',
  },
  {
    step: '03',
    title: 'Design & Build',
    desc:
      'Our team designs the UI, develops the product, integrates features, and keeps you updated throughout the process.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    desc:
      'We deploy your product, test performance, fix issues, and support improvements after launch.',
  },
]

export default function Services() {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero" id="services-hero">
        <div className="services-hero__dots" />
        <div className="services-hero__orb services-hero__orb--1" />
        <div className="services-hero__orb services-hero__orb--2" />

        <div className="container services-hero__inner">
          <div className="services-hero__content">
            <span className="section-label">Our Services</span>

            <h1 className="services-hero__title">
              Digital Services That Help Your Business <span>Build, Scale & Grow</span>
            </h1>

            <p className="services-hero__subtitle">
              From websites and mobile apps to eCommerce platforms, dashboards,
              automation, cloud deployment, and brand identity — PoleWeb delivers
              practical digital solutions for modern businesses.
            </p>

            <div className="services-hero__actions">
              <Link to="/contact" className="btn-primary services-hero__btn">
                Book a Consultation
              </Link>
              <Link to="/portfolio" className="services-hero__ghost">
                Explore Portfolio
              </Link>
            </div>
          </div>

          <div className="services-hero__visual">
            <div className="services-hero__card">
              <div className="services-hero__card-head">
                <span>Service Roadmap</span>
                <strong>Live</strong>
              </div>

              {[
                { label: 'Strategy', width: '92%' },
                { label: 'Design', width: '86%' },
                { label: 'Development', width: '95%' },
                { label: 'Launch', width: '88%' },
              ].map(({ label, width }) => (
                <div key={label} className="services-hero__progress">
                  <div className="services-hero__progress-top">
                    <span>{label}</span>
                    <small>{width}</small>
                  </div>
                  <div className="services-hero__bar">
                    <span style={{ width }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="services-hero__float services-hero__float--1">
              <span>🚀</span>
              <p>Fast Delivery</p>
            </div>

            <div className="services-hero__float services-hero__float--2">
              <span>🔐</span>
              <p>Secure Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="service-highlights" id="service-highlights">
        <div className="container service-highlights__grid">
          {serviceHighlights.map(({ icon, value, label }) => (
            <div key={label} className="service-highlight-card">
              <div className="service-highlight-card__icon">{icon}</div>
              <div>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENTERPRISE SOLUTIONS */}
      <section className="enterprise-section" id="enterprise-solutions">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Solutions We Build</span>
            <h2 className="section-title">
              Practical Digital Solutions for <span>Real Business Problems</span>
            </h2>
            <p className="section-subtitle">
              We combine strategy, design, development, and cloud technology to
              build solutions that improve operations and customer experience.
            </p>
          </div>

          <div className="enterprise-grid">
            {enterpriseSolutions.map(({ icon, title, desc }) => (
              <div key={title} className="enterprise-card">
                <div className="enterprise-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="svc-list" id="services-list">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Services</span>
            <h2 className="section-title">
              End-to-End Services for <span>Digital Growth</span>
            </h2>
            <p className="section-subtitle">
              Choose the service you need today — or combine multiple services
              into one complete digital transformation project.
            </p>
          </div>

          <div className="svc-grid">
            {services.map(({ icon, title, gradient, desc, features }, index) => (
              <article key={title} className="svc-card">
                <div className="svc-card__top">
                  <div
                    className="svc-card__icon-wrap"
                    style={{ background: gradient }}
                  >
                    <span>{icon}</span>
                  </div>
                  <span className="svc-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="svc-card__title">{title}</h3>
                <p className="svc-card__desc">{desc}</p>

                <ul className="svc-card__features">
                  {features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="svc-card__cta">
                  Get a Quote
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact-section" id="service-impact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Impact Delivered</span>
            <h2 className="section-title">
              Performance Metrics That <span>Prove Our Work</span>
            </h2>
            <p className="section-subtitle">
              We focus on outcomes that matter — better performance, stronger
              conversion, improved user experience, and long-term business value.
            </p>
          </div>

          <div className="impact-grid">
            {[
              { value: '99/100', label: 'Performance Score' },
              { value: '120%', label: 'Average Traffic Uplift' },
              { value: '3x', label: 'Lead Growth Potential' },
            ].map(({ value, label }) => (
              <div key={label} className="impact-card">
                <span className="impact-value">{value}</span>
                <span className="impact-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section" id="industries">
        <div className="container industries__inner">
          <div className="industries__content">
            <span className="section-label">Industries We Serve</span>
            <h2 className="section-title">
              Solutions for Startups, SMEs, and Growing Brands
            </h2>
            <p className="section-subtitle">
              Whether you are launching a startup, improving an existing business,
              or building a custom platform, we adapt our service approach to your
              industry and goals.
            </p>
          </div>

          <div className="industries__grid">
            {industries.map((industry) => (
              <div key={industry} className="industry-pill">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack-section" id="tech-stack">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">
              Technologies We <span>Work With</span>
            </h2>
            <p className="section-subtitle">
              We choose reliable, modern, and scalable technologies based on your
              project requirements.
            </p>
          </div>

          <div className="tech-categories" id="tech-categories">
            {techCategories.map(({ id, title, color, techs }) => (
              <div key={id} className="tech-category-card" id={`tech-cat-${id}`}>
                <h3 className="tech-category__title" style={{ color }}>
                  {title}
                </h3>

                <div className="tech-category__grid">
                  {techs.map(({ name, icon, bg }) => (
                    <div
                      key={name}
                      className="tech-pill"
                      id={`tech-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <span
                        className="tech-pill__icon"
                        style={{
                          background: `${bg}18`,
                          border: `1.5px solid ${bg}40`,
                        }}
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

      {/* PROCESS */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">
              Our Proven <span>Process</span>
            </h2>
            <p className="section-subtitle">
              A transparent workflow that keeps you informed from planning to
              launch.
            </p>
          </div>

          <div className="process__steps" id="process-steps">
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className="process__step">
                <span className="process__step-num">{step}</span>
                <h3 className="process__step-title">{title}</h3>
                <p className="process__step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="services-cta" id="services-cta">
        <div className="container services-cta__inner">
          <span className="section-label">Start Your Project</span>
          <h2>Need a Website, App, Dashboard, or Digital Platform?</h2>
          <p>
            Tell us your idea and we’ll help you plan the right solution with
            design, development, deployment, and growth support.
          </p>

          <div className="services-cta__actions">
            <Link to="/contact" className="services-cta__primary">
              Start a Project
            </Link>
            <Link to="/portfolio" className="services-cta__ghost">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}