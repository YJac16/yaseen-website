import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // In a real implementation, you would send this to a backend
    // For now, we'll use mailto as a fallback
    const mailtoLink = `mailto:yaseenjacobs97@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '', service: '' })
      
      // Fallback: open email client
      window.location.href = mailtoLink
    }, 1000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="section-title">Get in Touch</h1>
          <p className="contact-intro">
            Ready to work together? Fill out the form below or reach out directly. 
            I typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:yaseenjacobs97@gmail.com">yaseenjacobs97@gmail.com</a>
                  </p>
                </div>
                <div className="contact-method">
                  <h3>WhatsApp</h3>
                  <p>
                    <a href="https://wa.link/d96tsl" target="_blank" rel="noopener noreferrer">
                      +27 82 327 7446
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="contact-note">
                <p>
                  <strong>Response Time:</strong> I typically respond to inquiries within 24 hours, 
                  Monday through Friday.
                </p>
                <p>
                  <strong>Quick Questions?</strong> Feel free to send a WhatsApp message for faster communication.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service (optional)</option>
                    <option value="design">Digital Design & Visuals</option>
                    <option value="content">Content Creation & Website Updates</option>
                    <option value="support">Virtual Assistant & Digital Support</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="form-success">
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
