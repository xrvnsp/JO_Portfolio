import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Designer",
      company: "Madras MindWorks Pvt Ltd",
      duration: "2024 - Present",
      location: "Chennai, India",
      highlights: [
        "Lead UI/UX design for WoxBuilder, a cross-platform SaaS real estate platform with 3D visualization; contributed to 5,000+ downloads across Meta Quest, Microsoft Store, and Apple App Store.",
        "Designed and maintained scalable design systems that reduced development handoff time by 25%.",
        "Collaborated with developers and stakeholders to ensure seamless integration of visual design with real-time 3D rendering.",
        "Managed multiple projects simultaneously, ensuring quality and consistency across different product verticals."
      ]
    },
    {
      id: 2,
      role: "Junior Designer",
      company: "Madras MindWorks Pvt Ltd",
      duration: "2020 - 2024",
      location: "Chennai, India",
      highlights: [
        "Designed UI/UX for in-house products and client VR projects, including Cricket VR (Meta Horizon), achieving a 4.5/5 user rating post-launch.",
        "Developed game environments and UI elements, ensuring accessibility and user comfort; completed 10+ VR training modules on schedule.",
        "Created 3D cinematic assets and contributed to video editing/post-production for industrial product demos.",
        "Collaborated with cross-functional teams to align visual design with interactive and cinematic project goals."
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="timeline animate-fade-in-up delay-200">
          {experiences.map((exp) => (
            <div className="timeline-item glass-panel" key={exp.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="role text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="company text-secondary font-medium">{exp.company}</h4>
                  </div>
                  <div className="timeline-meta flex flex-col items-end">
                    <span className="duration text-accent font-semibold px-3 py-1 rounded-full bg-[rgba(99,102,241,0.1)] text-sm mb-1">
                      {exp.duration}
                    </span>
                    <span className="location text-secondary text-sm">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="highlights-list text-secondary">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
