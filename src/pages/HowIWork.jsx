import { Link } from 'react-router-dom'
import './HowIWork.css'

function HowIWork() {
  return (
    <div className="how-i-work-page">
      <section className="process-hero section">
        <div className="container">
          <h1 className="section-title">How I Work</h1>
          <p className="process-intro">
            I keep things simple and transparent. Here's my straightforward process 
            for delivering quality work on time, every time.
          </p>
        </div>
      </section>

      <section className="process-steps section">
        <div className="container">
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h2>Understanding Your Needs</h2>
              <p>
                We start with a clear conversation about what you need. I ask questions 
                to understand your goals, style preferences, and timeline. No assumptions—just 
                clarity from the start.
              </p>
              <ul className="step-details">
                <li>Quick discovery call or email exchange</li>
                <li>Review your brand style and requirements</li>
                <li>Confirm project scope and timeline</li>
              </ul>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h2>Clear Communication</h2>
              <p>
                Throughout the project, I keep you in the loop. You'll receive regular updates, 
                and I'm always available to answer questions or make adjustments. Communication 
                is key to getting it right.
              </p>
              <ul className="step-details">
                <li>Regular progress updates</li>
                <li>Quick response to your messages</li>
                <li>Revisions and feedback welcomed</li>
              </ul>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h2>Quality Delivery</h2>
              <p>
                I deliver clean, professional work that meets your expectations. You'll receive 
                files in the formats you need, along with clear instructions. Quality and 
                attention to detail—guaranteed.
              </p>
              <ul className="step-details">
                <li>Final review and approval</li>
                <li>All files delivered in requested formats</li>
                <li>Quick follow-up to ensure everything is perfect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process-values section">
        <div className="container">
          <h2 className="section-title">What You Can Expect</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Fast Turnaround</h3>
              <p>Most projects completed within 2-5 business days. Rush work available when needed.</p>
            </div>
            <div className="value-item">
              <h3>Transparent Pricing</h3>
              <p>Clear quotes with no hidden fees. You know exactly what you're paying for.</p>
            </div>
            <div className="value-item">
              <h3>Revisions Included</h3>
              <p>Up to 2 rounds of revisions to ensure everything is exactly as you envisioned.</p>
            </div>
            <div className="value-item">
              <h3>Easy Communication</h3>
              <p>Email, WhatsApp, or scheduled calls—whatever works best for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start a Project?</h2>
            <p>Let's discuss your needs and get started on delivering great results.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowIWork
