import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "AI Product Manager",
      company: "Askturing.ai",
      period: "2025–Present",
      achievements: [
        "Authored AI-driven PRDs, accelerating delivery by 30%",
        "Unified design–dev workflows, reducing delays by 25%",
        "Automated sprint processes, boosting velocity by 40%",
        "Built & scaled a 25-member global AI team",
        "Managed SOC2-compliant architecture and secure workflows"
      ]
    },
    {
      title: "Co-Founder & CTO",
      company: "Edvive",
      period: "2021–2023",
      achievements: [
        "Grew to 30K+ active users",
        "Improved retention by 40%, reduced CAC by 30%",
        "Raised $100K+",
        "Led a 20-person engineering team",
        "Built AI features and language learning automation"
      ]
    },
    {
      title: "UX Researcher",
      company: "Dalberg x BRAC",
      period: "2025",
      achievements: [
        "Conducted 50+ interviews & focus groups",
        "Improved data accuracy through localized tools",
        "Delivered insights on digital finance for 1M+ women"
      ]
    },
    {
      title: "UX Researcher",
      company: "Userhub Lab",
      period: "2022–2023",
      achievements: [
        "Led mixed-methods research",
        "Found 80% mismatch between curriculum & language needs",
        "Co-authored peer-reviewed paper"
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-period">{exp.period}</div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

