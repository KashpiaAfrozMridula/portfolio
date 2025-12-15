import React from 'react'
import './CaseStudies.css'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How I scaled an AI product to 30K users at Edvive",
      problem: "Edvive needed to grow from a small user base to scale while maintaining product quality and user retention.",
      approach: "I focused on understanding user behavior through data analysis, identifying key retention drivers, and building AI features that personalized the learning experience. I also optimized the product-market fit by aligning features with actual user needs.",
      execution: [
        "Conducted deep user research to understand retention patterns",
        "Built AI-powered personalization features",
        "Optimized onboarding flow based on user feedback",
        "Implemented data-driven growth experiments",
        "Streamlined product development to reduce time-to-market"
      ],
      results: [
        "Scaled to 30K+ active users",
        "Improved retention by 40%",
        "Reduced CAC by 30%",
        "Raised $100K+ in funding"
      ]
    },
    {
      title: "Building Askturing's AI Infra & Team From Zero",
      problem: "Askturing needed to build a robust AI infrastructure and scale a global team while maintaining high velocity and quality standards.",
      approach: "I authored comprehensive PRDs that aligned technical architecture with business goals, unified design and development workflows, and automated sprint processes to eliminate bottlenecks.",
      execution: [
        "Created AI-driven PRDs that accelerated decision-making",
        "Established unified design-dev workflows",
        "Automated sprint planning and tracking processes",
        "Built and scaled a 25-member global AI team",
        "Implemented SOC2-compliant architecture"
      ],
      results: [
        "Accelerated delivery by 30%",
        "Reduced delays by 25%",
        "Boosted velocity by 40%",
        "Successfully scaled team to 25 members"
      ]
    },
    {
      title: "Fixing Team Misalignment in a SaaS Startup",
      problem: "Cross-functional teams were experiencing communication breakdowns, leading to delayed releases and frustrated stakeholders.",
      approach: "I implemented new communication structures, created transparency tools, and established clear processes for breaking down features into demonstrable progress.",
      execution: [
        "Introduced structured sprint processes",
        "Created shared documentation and visibility tools",
        "Established regular alignment meetings",
        "Broke down large features into smaller, demonstrable chunks",
        "Set realistic expectations with stakeholders"
      ],
      results: [
        "Improved team trust and communication",
        "Faster release cycles",
        "Smoother team culture",
        "Reduced stakeholder frustration"
      ]
    }
  ]

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <div className="case-studies-list">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <h3 className="case-study-title">{study.title}</h3>
              
              <div className="case-study-section">
                <h4 className="case-study-section-title">Problem</h4>
                <p className="case-study-text">{study.problem}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-section-title">My Approach</h4>
                <p className="case-study-text">{study.approach}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-section-title">Execution</h4>
                <ul className="case-study-list">
                  {study.execution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-section-title">Results</h4>
                <ul className="case-study-results">
                  {study.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

