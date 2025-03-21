import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button 
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="menu"
      >
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>About Me</Link>
        <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link>
      </nav>
    </>
  )
}

export default Navigation
