import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            Digital Assistant
          </Link>
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/how-i-work" 
              className={isActive('/how-i-work') ? 'active' : ''}
              onClick={closeMenu}
            >
              How I Work
            </Link>
            <Link 
              to="/capabilities" 
              className={isActive('/capabilities') ? 'active' : ''}
              onClick={closeMenu}
            >
              Capabilities
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`btn btn-primary ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
