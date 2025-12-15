import React, { useState } from 'react'
import './About.css'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sections = [
    {
      title: "Who I Am",
      content: (
        <>
          <p className="about-text">
            I'm a Product Manager with a technical engineering background and 4+ years of experience building and scaling AI products.
          </p>
          <p className="about-text">
            I don't just manage tickets — I <em>own</em> the product, build trust between teams, and make sure everyone is aligned on the why, what, and how.
          </p>
          <p className="about-text">
            My strength is bringing clarity to chaos, translating between stakeholders and technical teams, and ensuring fast execution without losing the human or business context.
          </p>
        </>
      )
    },
    {
      title: "My PM Philosophy",
      content: (
        <>
          <p className="about-text">
            If you're looking for someone who simply monitors Jira boards, I'm not the right fit.
          </p>
          <p className="about-text">
            I work best where PMs are expected to <strong>take ownership</strong>, make <strong>strategic decisions</strong>, and help the company grow—not just report progress.
          </p>
          <p className="about-text">
            I bring structure, empathy, and clarity so teams move faster and founders feel confident that their product is in good hands.
          </p>
        </>
      )
    },
    {
      title: "Why Teams Like Working With Me",
      content: (
        <ul className="about-list">
          <li>I turn unclarity into alignment.</li>
          <li>I speak "business", "design", and "tech" fluently.</li>
          <li>I build mutual trust between devs and stakeholders.</li>
          <li>I reduce unnecessary emotional friction inside teams.</li>
          <li>I keep teams grounded in user needs, not internal assumptions.</li>
        </ul>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-carousel-wrapper">
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="about-carousel-content">
          <div className="container">
            <div className="carousel-container">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`about-section ${index === currentSlide ? 'active' : ''}`}
                >
                  <h3 className="about-subtitle">{section.title}</h3>
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
          {sections.map((_, index) => (
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

export default About

