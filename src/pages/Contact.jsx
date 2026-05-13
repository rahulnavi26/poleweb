import { useState } from 'react'
import './Contact.css'

const services = [
  'Web Development',
  'UI/UX Design',
  'Mobile App Development',
  'Brand Identity',
  'SEO & Growth',
  'Cloud Solutions',
  'Dashboard / Portal',
  'Other',
]

const channels = [
  {
    icon: '✉️',
    label: 'Email',
    val: 'hello@poleweb.com',
    href: 'mailto:hello@poleweb.com',
    id: 'contact-email',
  },
  {
    icon: '☎️',
    label: 'Phone',
    val: '+91 123 456 7890',
    href: 'tel:+911234567890',
    id: 'contact-phone',
  },
  {
    icon: '📍',
    label: 'Office',
    val: 'Hyderabad, India',
    href: '#contact-map',
    id: 'contact-office',
  },
  {
    icon: '🕐',
    label: 'Working Hours',
    val: 'Mon–Sat, 9:00 AM – 6:00 PM IST',
    href: '#contact-section',
    id: 'contact-hours',
  },
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most business websites take 4–8 weeks. Larger web apps, dashboards, or mobile apps may take 8–16 weeks depending on scope, integrations, and content readiness.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. We can redesign your current website with better UI, performance, responsiveness, SEO structure, and conversion-focused sections.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with startups, small businesses, and growing brands. We can suggest a practical scope based on your budget and launch goals.',
  },
  {
    q: 'Will I own the code and design after delivery?',
    a: 'Yes. After project completion and final payment, the approved code, designs, and project assets are handed over to you.',
  },
]

const process = [
  { step: '01', title: 'Share Your Idea', desc: 'Tell us about your project, goals, timeline, and preferred service.' },
  { step: '02', title: 'Get a Clear Plan', desc: 'We review your requirements and suggest the best approach, scope, and timeline.' },
  { step: '03', title: 'Build & Launch', desc: 'Our team designs, develops, tests, and launches your digital solution.' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero" id="contact-hero">
        <div className="contact-hero__dots" />
        <div className="contact-hero__orb contact-hero__orb--1" />
        <div className="contact-hero__orb contact-hero__orb--2" />

        <div className="container contact-hero__inner">
          <div className="contact-hero__content">
            <span className="section-label">Contact PoleWeb</span>

            <h1 className="contact-hero__title">
              Have a Project Idea? Let’s Build Something <span>Powerful Together</span>
            </h1>

            <p className="contact-hero__subtitle">
              Share your website, app, dashboard, branding, or digital growth
              requirement. We’ll help you shape it into a clear plan with the
              right design and technology approach.
            </p>

            <div className="contact-hero__actions">
              <a href="#contact-form" className="btn-primary contact-hero__btn">
                Send Message
              </a>
              <a href="#faq" className="contact-hero__ghost">
                View FAQs
              </a>
            </div>
          </div>

          <div className="contact-hero__visual">
            <div className="contact-hero__card">
              <div className="contact-hero__card-head">
                <span>Project Response</span>
                <strong>24 hrs</strong>
              </div>

              {process.map(({ step, title, desc }) => (
                <div key={step} className="contact-hero__step">
                  <span className="contact-hero__step-no">{step}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-hero__float contact-hero__float--1">
              <span>⚡</span>
              <p>Fast Response</p>
            </div>

            <div className="contact-hero__float contact-hero__float--2">
              <span>🤝</span>
              <p>Clear Consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact-section">
        <div className="container contact__inner">
          <div className="contact__info">
            <span className="section-label">Get in Touch</span>
            <h2 className="contact__info-title">Tell Us What You Want to Build</h2>
            <p className="contact__info-sub">
              Fill out the form and share your requirements. You can also contact
              us directly through email or phone.
            </p>

            <div className="contact__channels" id="contact-channels">
              {channels.map(({ icon, label, val, href, id }) => (
                <a key={label} href={href} className="contact__channel" id={id}>
                  <div className="contact__channel-icon">{icon}</div>
                  <div>
                    <p className="contact__channel-label">{label}</p>
                    <p className="contact__channel-val">{val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__mini-card">
              <span>💡</span>
              <div>
                <h3>Need help choosing a service?</h3>
                <p>
                  Send your idea in simple words. We’ll suggest the right service,
                  scope, and next step.
                </p>
              </div>
            </div>

            <div className="contact__social" id="contact-social">
              {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="contact__social-link"
                  id={`contact-social-${social.toLowerCase()}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success" id="contact-success">
                <span className="contact__success-icon">✓</span>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thanks for reaching out. Our team will review your details and
                  respond with the next steps.
                </p>

                <button
                  className="btn-primary"
                  onClick={() => setSent(false)}
                  id="contact-send-another"
                  type="button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                <div className="contact__form-head">
                  <span className="contact__form-kicker">Project Inquiry</span>
                  <h3 className="contact__form-title">Start Your Project</h3>
                  <p>Share a few details and we’ll get back to you soon.</p>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-name">Full Name *</label>
                    <input
                      id="cf-name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="cf-email">Email Address *</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input
                      id="cf-phone"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="cf-company">Company / Brand</label>
                    <input
                      id="cf-company"
                      name="company"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-service">Service Interested In *</label>
                    <select
                      id="cf-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="cf-budget">Estimated Budget</label>
                    <select
                      id="cf-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option>Below ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹3,00,000</option>
                      <option>₹3,00,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="cf-timeline">Preferred Timeline</label>
                  <select
                    id="cf-timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="cf-message">Project Details *</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, features, target users, and any reference websites..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit" id="contact-submit">
                  Send Message
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="contact-map-section" id="contact-map">
        <div className="container contact-map__inner">
          <div className="contact-map__content">
            <span className="section-label">Location</span>
            <h2 className="section-title">
              Based in India, Building for <span>Growing Brands</span>
            </h2>
            <p className="section-subtitle">
              We support clients through online communication, project calls,
              shared planning documents, and clear milestone updates.
            </p>
          </div>

          <div className="contact-map__box">
            <div className="contact-map__pin">📍</div>
            <h3>Hyderabad, India</h3>
            <p>Remote-friendly digital delivery for businesses across regions.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container faq__inner">
          <div className="faq__content">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">
              Common <span>Questions</span>
            </h2>
            <p className="section-subtitle">
              Quick answers before you start your project discussion.
            </p>
          </div>

          <div className="faq__list" id="faq-list">
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className={`faq__item ${openFaq === i ? 'faq__item--open' : ''}`}
                id={`faq-item-${i}`}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  id={`faq-btn-${i}`}
                  type="button"
                >
                  <span>{q}</span>
                  <span className="faq__chevron">{openFaq === i ? '−' : '+'}</span>
                </button>

                {openFaq === i && <p className="faq__answer">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}