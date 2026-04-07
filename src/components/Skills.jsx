import React from 'react';
import { Palette, PenTool, MonitorSmartphone, Code, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const designSkills = [
    "UI/UX Design",
    "Prototyping & Wireframing", 
    "Design Systems",
    "Interaction Design",
    "Responsive Web Design",
    "Front-End Development",
    "Logo & Brand Identity",
    "Video Editing & Post-Production"
  ];

  const tools = [
    { name: "Figma", icon: <PenTool size={18} /> },
    { name: "Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)", icon: <Layers size={18} /> },
    { name: "Unity (UI Integration)", icon: <Layers size={18} /> },
    { name: "HTML5, CSS3, JavaScript, React JS", icon: <Code size={18} /> },
    { name: "WordPress", icon: <MonitorSmartphone size={18} /> }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Key <span className="text-gradient">Competencies</span>
        </h2>
        
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Design & Development */}
          <div className="skill-card glass-panel animate-fade-in-up delay-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[rgba(99,102,241,0.1)] rounded-xl text-accent">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-bold">Design & Dev</h3>
            </div>
            
            <ul className="space-y-3">
              {designSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2 text-secondary group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-primary transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools & Tech */}
          <div className="skill-card glass-panel animate-fade-in-up delay-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[rgba(168,85,247,0.1)] rounded-xl text-[var(--accent-gradient)]">
                <PenTool size={24} className="text-[#a855f7]" />
              </div>
              <h3 className="text-xl font-bold">Tools & Tech</h3>
            </div>
            
            <div className="tools-container flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <div key={idx} className="tool-chip flex items-center gap-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-4 py-2 rounded-lg hover:border-[#a855f7] hover:bg-[rgba(168,85,247,0.1)] transition-all cursor-default">
                  <span className="text-[#a855f7] opacity-80">{tool.icon}</span>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
