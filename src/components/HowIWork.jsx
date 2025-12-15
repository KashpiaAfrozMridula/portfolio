import React from 'react'
import './HowIWork.css'

const HowIWork = () => {
  const workflowSteps = [
    {
      title: "Discovery & Research",
      description: "I start by understanding the problem deeply—talking to users, analyzing data, and aligning with business goals. I don't assume; I validate."
    },
    {
      title: "Prioritization & Roadmapping",
      description: "I translate insights into a clear roadmap. I balance user needs, business impact, and technical feasibility to create a plan that everyone understands."
    },
    {
      title: "Execution & Collaboration",
      description: "I work closely with design and engineering teams, ensuring clear communication, removing blockers, and maintaining alignment throughout the build."
    },
    {
      title: "Tracking & Iteration",
      description: "I track progress with metrics that matter, gather feedback continuously, and iterate based on real user behavior—not assumptions."
    },
    {
      title: "Delivery & Business Impact",
      description: "I ensure features ship on time, deliver value to users, and contribute to business goals. I measure success and communicate impact clearly."
    }
  ]

  return (
    <section id="how-i-work" className="section how-i-work">
      <div className="container">
        <h2 className="section-title">How I Work</h2>
        <div className="workflow">
          {workflowSteps.map((step, index) => (
            <div key={index} className="workflow-step">
              <h3 className="workflow-title">{step.title}</h3>
              <p className="workflow-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork

