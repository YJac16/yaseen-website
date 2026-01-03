import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-profile">
              <img 
                src="/_MG_0276.JPG" 
                alt="Yaseen Jacobs" 
                className="hero-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{display: 'none'}}>
                <span>YJ</span>
              </div>
            </div>
            <h1>Clean Digital Design & Reliable Support</h1>
            <p className="hero-name">Yaseen Jacobs</p>
            <p className="hero-subtitle">
              I help small businesses and creators with clean visuals, clear content, 
              and reliable digital assistance—so you can focus on what matters most.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="value-prop section">
        <div className="container">
          <div className="value-prop-content">
            <h2>Why Work With Me?</h2>
            <div className="value-cards">
              <div className="value-card">
                <h3>Clear Communication</h3>
                <p>No jargon, no confusion. I explain everything in simple terms and keep you updated every step of the way.</p>
              </div>
              <div className="value-card">
                <h3>Fast Turnaround</h3>
                <p>I understand you need things done quickly. Most projects are completed within 2-5 business days.</p>
              </div>
              <div className="value-card">
                <h3>Reliable Quality</h3>
                <p>Clean, professional work that matches your brand and exceeds your expectations. Every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <div className="services-grid">
            <div className="service-preview-card">
              <h3>Digital Design</h3>
              <p>Social media graphics, flyers, simple visuals that look professional and get results.</p>
            </div>
            <div className="service-preview-card">
              <h3>Content & Updates</h3>
              <p>Content creation, formatting, cleanup, and website updates done quickly and accurately.</p>
            </div>
            <div className="service-preview-card">
              <h3>Digital Support</h3>
              <p>Ongoing virtual assistant services for your digital needs—whenever you need them.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/services" className="btn btn-primary">
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
