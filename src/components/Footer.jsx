import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Digital Assistant</h3>
            <p>Reliable digital support for your business needs.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/services">Services</Link>
              <Link to="/how-i-work">How I Work</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p>
              <a href="mailto:yaseenjacobs97@gmail.com">yaseenjacobs97@gmail.com</a>
            </p>
            <p>
              <a href="https://wa.link/d96tsl" target="_blank" rel="noopener noreferrer">
                WhatsApp: +27 82 327 7446
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Digital Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
