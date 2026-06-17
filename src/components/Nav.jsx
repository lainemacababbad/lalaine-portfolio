import { useState, useEffect } from 'react'
import './Nav.css'

const links = ['home', 'work', 'about', 'contact']
// remember to add 'playground' back to links array when adding playground page

export default function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (link) => {
    setActive(link)
    setMenuOpen(false)
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#home" className="nav__logo">lalaine.</a>

      <ul className="nav__links">
        {links.map(link => {
          const isActive = active === link
          const className = isActive ? 'nav__link nav__link--active' : 'nav__link'
          return (
            <li key={link}>
              <a href={`#${link}`} className={className} onClick={() => handleLinkClick(link)}>
                {link}
              </a>
            </li>
          )
        })}
      </ul>

      <button
        className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav__mobile-menu ${menuOpen ? 'nav__mobile-menu--open' : ''}`}>
        <ul className="nav__mobile-links">
          {links.map(link => {
            const isActive = active === link
            const className = isActive ? 'nav__mobile-link nav__mobile-link--active' : 'nav__mobile-link'
            return (
              <li key={link}>
                <a href={`#${link}`} className={className} onClick={() => handleLinkClick(link)}>
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}