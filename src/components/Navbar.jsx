import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/services',  label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about',     label: 'About' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" id="nav-logo">
          <img src="/logo.png" alt="PoleWeb Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Pole<span className="navbar__logo-accent">Web</span></span>
        </Link>

        <nav className="navbar__links" id="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to} to={to} end={to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              id={`nav-link-${label.toLowerCase()}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn-primary navbar__cta" id="nav-cta">
            Start a Project
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu" id="nav-hamburger"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} id="mobile-nav">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to} to={to} end={to === '/'}
            className={({ isActive }) => `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
            id={`mobile-link-${label.toLowerCase()}`}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} id="mobile-cta">
          Start a Project
        </Link>
      </div>
    </header>
  )
}