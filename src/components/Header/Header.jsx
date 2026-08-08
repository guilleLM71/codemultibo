import { useState } from 'react'
import { NAV_LINKS } from '../../data/constants'

export default function Header({ onOpenSideMenu }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header" id="top">
      <div className="header-inner">
        <div className="logo">
          <a href="#hero">
            <span style={{fontSize: '24px', fontWeight: 700, color: '#ce1d35'}}>MultiCode</span>
          </a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="contact-btn" onClick={handleNavClick}>Contacto</a>
        </nav>
      </div>

      <button className="side-menu-toggle" onClick={onOpenSideMenu}>☰</button>
    </header>
  )
}
