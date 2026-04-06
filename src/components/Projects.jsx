import React from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "WoxBuilder",
      role: "Product Design",
      description: "Lead UI/UX design for a cross-platform SaaS real estate platform with 3D visualization. Contributed to 5,000+ downloads across Meta Quest, Microsoft Store, and Apple App Store.",
      tags: ["UI/UX System", "SaaS", "3D Visualization"]
    },
    {
      id: 2,
      title: "Arcade Hub",
      role: "UI Design",
      description: "Designed engaging UI for arcade gaming platform; user session duration increased by 25% post-launch. Focused on usability and visual appeal.",
      tags: ["Gaming UI", "Usability"]
    },
    {
      id: 3,
      title: "Porunai Museum",
      role: "Interactive Systems",
      description: "Designed touch-screen feedback UI and Hopscotch game; installation served 1,500+ visitors in the opening month.",
      tags: ["Figma to Unity", "Touch UI", "Interactive"]
    },
    {
      id: 4,
      title: "VIT Chennai",
      role: "360° Virtual Campus Tour",
      description: "Designed and developed responsive tour with intuitive navigation, resulting in 40% faster load times.",
      tags: ["360° Web", "Optimization", "Responsive"]
    },
    {
      id: 5,
      title: "AIIS",
      role: "Desktop & VR Walkthrough Website",
      description: "Designed responsive front-end interfaces and integrated 3D walkthrough features, improving user task completion by 30%.",
      tags: ["VR Interface", "3D Controls"]
    },
    {
      id: 6,
      title: "TNAU",
      role: "360° Tour Website",
      description: "Designed and implemented a responsive museum/tour website; increased engagement by 35% via enhanced animations and interaction design.",
      tags: ["HTML/CSS/JS", "Animations"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Key <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`project-card glass-panel animate-fade-in-up delay-${(index % 3 + 1) * 100}`} 
              key={project.id}
            >
              <div className="project-image-placeholder relative overflow-hidden h-48 rounded-t-xl mb-4 bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-center group">
                <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Layers className="text-[rgba(255,255,255,0.1)] w-16 h-16 group-hover:scale-110 group-hover:text-[rgba(99,102,241,0.5)] transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-[rgba(10,10,15,0.8)] backdrop-blur-md p-3 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-accent hover:text-accent transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="project-content p-6 pt-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-[rgba(99,102,241,0.1)] text-accent rounded-full">
                    {project.role}
                  </span>
                </div>
                
                <p className="text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="project-tags flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.1)] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
