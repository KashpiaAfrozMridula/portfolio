import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about product management and AI.
          </p>
          <div className="contact-methods">
            <a href="mailto:your.email@example.com" className="contact-item">
              <div className="contact-details">
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">your.email@example.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-details">
                <h3 className="contact-label">LinkedIn</h3>
                <p className="contact-value">linkedin.com/in/yourprofile</p>
              </div>
            </a>
            <a href="https://calendly.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-details">
                <h3 className="contact-label">Schedule a Call</h3>
                <p className="contact-value">Book time on my calendar</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

