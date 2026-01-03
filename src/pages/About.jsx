import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <div className="profile-image-wrapper">
              <img 
                src="/_MG_0276.JPG" 
                alt="Yaseen Jacobs - Digital Assistant" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{display: 'none'}}>
                <span>YJ</span>
              </div>
            </div>
            <div className="about-hero-text">
              <h1 className="section-title">About Me</h1>
              <p className="about-name">Yaseen Jacobs</p>
              <p className="about-intro">
                I'm a freelance digital assistant who specializes in making your digital life 
                easier. I focus on clarity, quality, and reliability—because your business deserves nothing less.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-text">
            <div className="about-section">
              <h2>What I Believe</h2>
              <p>
                Great digital work doesn't have to be complicated. I believe in clear communication, 
                clean design, and delivering exactly what you need—on time and within budget. 
                No unnecessary complexity, no confusing jargon, just reliable results.
              </p>
            </div>

            <div className="about-section">
              <h2>Why I Do This</h2>
              <p>
                Small businesses and solo founders often struggle with digital tasks that take time 
                away from what they do best. I help by handling the design, content, and digital 
                support you need, so you can focus on growing your business and serving your customers.
              </p>
            </div>

            <div className="about-section">
              <h2>My Approach</h2>
              <p>
                I listen carefully to understand what you really need, communicate clearly throughout 
                every project, and deliver quality work that meets your expectations. I'm responsive, 
                reliable, and committed to making every interaction smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">What Matters to Me</h2>
          <div className="values-list">
            <div className="value-box">
              <h3>Reliability</h3>
              <p>When I say I'll deliver, I deliver. On time, every time.</p>
            </div>
            <div className="value-box">
              <h3>Clarity</h3>
              <p>Clear communication and straightforward processes—no confusion.</p>
            </div>
            <div className="value-box">
              <h3>Quality</h3>
              <p>Professional work that looks good and works well for your business.</p>
            </div>
            <div className="value-box">
              <h3>Respect</h3>
              <p>For your time, your budget, and your vision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Let's Work Together</h2>
            <p>If you're looking for reliable digital support, I'd love to hear about your project.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
