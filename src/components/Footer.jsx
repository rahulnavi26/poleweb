import { Link } from 'react-router-dom'
import './Footer.css'

const services = ['Web Development','UI/UX Design','SEO & Growth','Brand Strategy','Mobile Apps','Cloud Solutions']
const company  = ['About Us','Blog','Careers','Press Kit','Contact']
const social   = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Twitter',  href: '#', icon: '𝕏'  },
  { label: 'Instagram',href: '#', icon: '✦'  },
  { label: 'Dribbble', href: '#', icon: '⊙'  },
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* Top CTA strip */}
      <div className="footer__cta-strip">
        <div className="container footer__cta-inner">
          <div>
            <h2 className="footer__cta-heading">
              Ready to Build Something <span>Extraordinary?</span>
            </h2>
            <p className="footer__cta-sub">Let's craft your next digital masterpiece together.</p>
          </div>
          <Link to="/contact" className="btn-primary footer__cta-btn" id="footer-cta">
            Start a Project
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="PoleWeb" className="footer__logo-img" />
              <span className="footer__logo-text">Pole<span>Web</span></span>
            </div>
            <p className="footer__tagline">
              We engineer powerful digital experiences for brands that refuse to be ordinary. Your vision, our craft.
            </p>
            <div className="footer__social">
              {social.map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label} className="footer__social-btn" id={`footer-social-${label.toLowerCase()}`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__list">
              {services.map(s => (
                <li key={s}><Link to="/services" className="footer__link">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__list">
              {company.map(c => (
                <li key={c}><Link to="/about" className="footer__link">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get In Touch</h4>
            <div className="footer__contact-list">
              <a href="mailto:hello@poleweb.com" className="footer__contact-item" id="footer-email">
                <span className="footer__contact-icon">✉</span>
                hello@poleweb.com
              </a>
              <a href="tel:+911234567890" className="footer__contact-item" id="footer-phone">
                <span className="footer__contact-icon">☎</span>
                +91 123 456 7890
              </a>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">⊕</span>
                Hyderabad, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} PoleWeb. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link" id="footer-privacy">Privacy Policy</a>
            <a href="#" className="footer__bottom-link" id="footer-terms">Terms of Service</a>
            <a href="#" className="footer__bottom-link" id="footer-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
