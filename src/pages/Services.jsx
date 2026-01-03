import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1 className="section-title">Services</h1>
          <p className="services-intro">
            I offer straightforward digital services designed to help your business 
            look professional and run smoothly. Here's what I can do for you:
          </p>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h2>Digital Design & Visuals</h2>
              <p className="service-description">
                Clean, professional graphics for your social media, marketing materials, and brand.
              </p>
              <ul className="service-features">
                <li>Social media graphics (posts, stories, covers)</li>
                <li>Flyers and promotional materials</li>
                <li>Simple logos and brand elements</li>
                <li>Presentation slides and visuals</li>
                <li>Banner graphics and headers</li>
              </ul>
              <p className="service-note">
                All designs are clean, modern, and tailored to your brand style. 
                I'll make sure everything looks professional and aligns with your vision.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">✍️</div>
              <h2>Content Creation & Website Updates</h2>
              <p className="service-description">
                Content writing, editing, formatting, and website maintenance to keep your online presence fresh and accurate.
              </p>
              <ul className="service-features">
                <li>Content writing and editing</li>
                <li>Blog post formatting and cleanup</li>
                <li>Website content updates</li>
                <li>Document formatting and organization</li>
                <li>Email content and templates</li>
                <li>Product descriptions and copy</li>
              </ul>
              <p className="service-note">
                I handle everything from quick updates to full content overhauls. 
                Clear, concise, and error-free—every time.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h2>Virtual Assistant & Digital Support</h2>
              <p className="service-description">
                Ongoing support for your digital tasks, whenever you need reliable help.
              </p>
              <ul className="service-features">
                <li>Email management and responses</li>
                <li>Social media scheduling and posting</li>
                <li>Data entry and organization</li>
                <li>Research and information gathering</li>
                <li>Basic admin tasks</li>
                <li>Calendar management</li>
              </ul>
              <p className="service-note">
                Flexible support that fits your needs. Whether it's regular weekly tasks 
                or one-off projects, I'm here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and how I can help you achieve your goals.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
