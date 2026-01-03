import { Link } from 'react-router-dom'
import './Capabilities.css'

function Capabilities() {
  return (
    <div className="capabilities-page">
      <section className="capabilities-hero section">
        <div className="container">
          <h1 className="section-title">Capabilities</h1>
          <p className="capabilities-intro">
            Here's what I can deliver for you. I focus on outcomes that matter: 
            clean visuals, clear content, and reliable delivery.
          </p>
        </div>
      </section>

      <section className="capabilities-list section">
        <div className="container">
          <div className="capability-categories">
            <div className="capability-category">
              <h2>Design & Visuals</h2>
              <div className="capabilities-grid">
                <div className="capability-item">
                  <h3>Clean Graphics</h3>
                  <p>Professional social media graphics, flyers, and marketing materials</p>
                </div>
                <div className="capability-item">
                  <h3>Brand Consistency</h3>
                  <p>Visuals that match your brand style and messaging</p>
                </div>
                <div className="capability-item">
                  <h3>Quick Turnaround</h3>
                  <p>Designs delivered fast without compromising quality</p>
                </div>
              </div>
            </div>

            <div className="capability-category">
              <h2>Content & Writing</h2>
              <div className="capabilities-grid">
                <div className="capability-item">
                  <h3>Clear Communication</h3>
                  <p>Content that's easy to read and gets your message across</p>
                </div>
                <div className="capability-item">
                  <h3>Error-Free Writing</h3>
                  <p>Thoroughly edited and proofread content every time</p>
                </div>
                <div className="capability-item">
                  <h3>SEO-Friendly</h3>
                  <p>Content formatted for search engines and readability</p>
                </div>
              </div>
            </div>

            <div className="capability-category">
              <h2>Digital Support</h2>
              <div className="capabilities-grid">
                <div className="capability-item">
                  <h3>Website Updates</h3>
                  <p>Quick, accurate updates to your website content</p>
                </div>
                <div className="capability-item">
                  <h3>Organization</h3>
                  <p>Clean, organized files and documents</p>
                </div>
                <div className="capability-item">
                  <h3>Reliable Service</h3>
                  <p>Consistent, dependable support when you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section section">
        <div className="container">
          <h2 className="section-title">Tools & Platforms I Work With</h2>
          <div className="tools-grid">
            <div className="tool-item">
              <h3>Design Tools</h3>
              <p>Canva, Adobe Express, Figma (basic), and other design platforms</p>
            </div>
            <div className="tool-item">
              <h3>Content Platforms</h3>
              <p>WordPress, Squarespace, Wix, Shopify, and most CMS platforms</p>
            </div>
            <div className="tool-item">
              <h3>Office Tools</h3>
              <p>Google Workspace, Microsoft Office, Notion, and productivity apps</p>
            </div>
            <div className="tool-item">
              <h3>Communication</h3>
              <p>Email, WhatsApp, Slack, and project management tools</p>
            </div>
          </div>
          <p className="tools-note">
            Don't see a tool you use? Just ask—I'm adaptable and can learn new platforms quickly.
          </p>
        </div>
      </section>

      <section className="capabilities-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Have a Specific Need?</h2>
            <p>Let's talk about your project and how I can help you achieve your goals.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Capabilities
