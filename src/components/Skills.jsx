import React, { useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const skillSections = [
    {
      title: "Technical Skills",
      content: (
        <div className="skill-content">
          <h4 className="skill-subtitle">Technical Depth</h4>
          <p className="skill-description">
            I understand how a tech product is built end to end. I've worked hands-on with:
          </p>
          <ul className="skill-list">
            <li>APIs, database schemas, SQL</li>
            <li>RAG systems & LLM integrations</li>
            <li>MERN stack + Django basics</li>
            <li>AWS (EC2, deployment workflows)</li>
            <li>DevOps basics, CI/CD</li>
            <li>Data analysis from DB</li>
            <li>Translating business/UX needs into technical scope</li>
          </ul>
          <div className="skill-why">
            <strong>Why This Matters:</strong>
            <ul>
              <li>Dev teams trust me because I "get" how they work.</li>
              <li>Stakeholders trust me because I can explain complex systems simply.</li>
              <li>I prevent miscommunication that normally delays products by weeks.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "UX & Human-Centered Skills",
      content: (
        <div className="skill-content">
          <ul className="skill-list">
            <li>Diploma in Human-Centered Research</li>
            <li>Experienced in interviews, usability tests, qualitative coding</li>
            <li>Strong at understanding user mental models</li>
            <li>Make product decisions that serve user needs, not stakeholder assumptions</li>
            <li>Bridge between UX research → design → engineering</li>
          </ul>
          <div className="skill-why">
            <strong>Why This Matters:</strong>
            <p>Your products don't just work—they <em>fit</em> users' lives.</p>
          </div>
        </div>
      )
    },
    {
      title: "Business & Founder Empathy",
      content: (
        <div className="skill-content">
          <ul className="skill-list">
            <li>Co-founded an AI SaaS company</li>
            <li>Scaled to 30K+ users</li>
            <li>Raised $100K+</li>
            <li>Understand founder pressure: growth, deadlines, uncertainty</li>
            <li>Translate founder anxiety into actionable product priorities</li>
            <li>Prevent burnout cycles & misaligned expectations</li>
          </ul>
          <div className="skill-why">
            <strong>Why This Matters:</strong>
            <p>You reduce friction inside early-stage companies — an extremely valuable skill.</p>
          </div>
        </div>
      )
    },
    {
      title: "Interpersonal & Alignment Skills",
      content: (
        <div className="skill-content">
          <ul className="skill-list">
            <li>Build clarity & transparency across teams</li>
            <li>Communicate technical work in business-friendly language</li>
            <li>Advocate for developers so their work is visible</li>
            <li>Represent stakeholders' needs in technical terms</li>
            <li>Bridge marketing ↔️ tech miscommunication</li>
            <li>Break big features into achievable, demonstrable progress</li>
            <li>Set realistic expectations and stop never-ending sprints</li>
            <li>Know when to ask for help (and ensure the team does too)</li>
          </ul>
          <div className="skill-why">
            <strong>Why This Matters:</strong>
            <p>You become the <em>single source of truth</em> and the emotional stabilizer of the team.</p>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillSections.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillSections.length) % skillSections.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills I Bring with Me</h2>
      </div>
      <div className="skills-carousel-wrapper">
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="skills-carousel-content">
          <div className="container">
            <div className="carousel-container">
              {skillSections.map((section, index) => (
                <div
                  key={index}
                  className={`skill-section ${index === currentSlide ? 'active' : ''}`}
                >
                  <h3 className="skill-title">{section.title}</h3>
                  {section.content}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button 
          className="carousel-btn carousel-btn-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
      <div className="container">
        <div className="carousel-indicators">
          {skillSections.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

