import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Product Builder Who Brings Clarity, Speed & Alignment to Early-Stage Teams.
          </h1>
          <p className="hero-subtitle">
            I build and scale AI-driven products with the perfect balance of technical depth, UX thinking, and founder empathy.
          </p>
          {/* <div className="hero-buttons">
            <button 
              className="btn btn-secondary"
              onClick={() => {
                // In a real implementation, this would download the CV
                alert('CV download functionality - add your CV file link here')
              }}
            >
              Download CV
            </button>
          </div> */}
          <div className="hero-snapshot">
            <div className="snapshot-item">
              <div className="snapshot-number">4+</div>
              <div className="snapshot-label">years building AI/SaaS products</div>
            </div>
            <div className="snapshot-item">
              <div className="snapshot-number">Co-founder</div>
              <div className="snapshot-label">Raised $100K+</div>
            </div>
            <div className="snapshot-item">
              <div className="snapshot-number">Technical PM</div>
              <div className="snapshot-label">APIs · RAG · AWS · React · SQL · DevOps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

