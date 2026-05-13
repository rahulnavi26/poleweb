import { useState } from 'react'
import './Contact.css'

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most websites take 4–8 weeks. Complex web apps or mobile projects may take 3–6 months. We give you a precise timeline after understanding your scope.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-price project quotes and monthly retainer options. We\'re transparent about costs upfront — no hidden fees, ever.' },
  { q: 'Do you work with startups?', a: 'Absolutely! We love working with startups and have flexible packages designed for early-stage companies and scale-ups alike.' },
  { q: 'Will I own the code after delivery?', a: 'Yes — full IP transfer on project completion. The code, designs, and all assets are 100% yours.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container page-hero__content">
          <span className="section-label">Let's Connect</span>
          <h1 className="page-hero__title">
            Start Your <span>Digital Journey</span> Today
          </h1>
          <p className="page-hero__subtitle">
            Tell us about your project and we'll get back to you within 24 hours with a custom
            strategy and quote. No pressure, no obligation.
          </p>
          <p className="page-hero__strapline">Whether you're building from scratch or scaling an existing product, let's create something remarkable together.</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section" id="contact-section">
        <div className="container contact__inner">

          {/* Info column */}
          <div className="contact__info">
            <h2 className="contact__info-title">Reach Out Anytime</h2>
            <p className="contact__info-sub">
              We're excited to chat about your ideas. Connect via the form, email, phone, or stop by our office in Hyderabad.
            </p>
            <div className="contact__channels" id="contact-channels">
              {[
                { icon: '✉', label: 'Email', val: 'hello@poleweb.com',    href: 'mailto:hello@poleweb.com', id: 'contact-email' },
                { icon: '☎', label: 'Phone', val: '+91 123 456 7890',     href: 'tel:+911234567890',        id: 'contact-phone' },
                { icon: '⊕', label: 'Office', val: 'Hyderabad, India',    href: '#',                        id: 'contact-office' },
                { icon: '🕐', label: 'Hours',  val: 'Mon–Sat, 9am–6pm IST', href: '#',                     id: 'contact-hours' },
              ].map(({ icon, label, val, href, id }) => (
                <a key={label} href={href} className="contact__channel" id={id}>
                  <div className="contact__channel-icon">{icon}</div>
                  <div>
                    <p className="contact__channel-label">{label}</p>
                    <p className="contact__channel-val">{val}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="contact__social" id="contact-social">
              {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map(s => (
                <a key={s} href="#" className="contact__social-link" id={`contact-social-${s.toLowerCase()}`}>{s}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap glass-card">
            {sent ? (
              <div className="contact__success" id="contact-success">
                <span className="contact__success-icon">✓</span>
                <h3>We got your message!</h3>
                <p>Thanks for reaching out. Our team will review your project details and get back to you within 24 hours with a personalized response.</p>
                <button className="btn-primary" onClick={() => setSent(false)} id="contact-send-another">Send Another Message</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                <h3 className="contact__form-title">Tell Us About Your Project</h3>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-name">Full Name *</label>
                    <input id="cf-name" name="name" placeholder="John Doe" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-email">Email Address *</label>
                    <input id="cf-email" name="email" type="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input id="cf-phone" name="phone" placeholder="+91 000 000 0000" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-service">Service Interested In *</label>
                    <select id="cf-service" name="service" required value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>SEO & Growth</option>
                      <option>Brand Identity</option>
                      <option>Mobile App</option>
                      <option>Cloud Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-message">Tell Us About Your Project *</label>
                  <textarea id="cf-message" name="message" rows={5} placeholder="Describe your project, goals, timeline, and budget..." required value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary contact__submit" id="contact-submit">
                  Send Message
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container faq__inner">
          <div>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common <span>Questions</span></h2>
          </div>
          <div className="faq__list" id="faq-list">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className={`faq__item glass-card ${openFaq === i ? 'faq__item--open' : ''}`} id={`faq-item-${i}`}>
                <button className="faq__question" onClick={() => setOpenFaq(openFaq === i ? null : i)} id={`faq-btn-${i}`}>
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
