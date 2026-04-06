import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-card glass-panel animate-fade-in-up delay-100 p-8">
            <h3 className="text-2xl font-bold mb-4">Profile</h3>
            <p className="text-secondary mb-6 line-height-relaxed">
              Results-driven UI/UX Designer with 5+ years of experience crafting intuitive interfaces for 
              immersive 3D, VR, and web platforms. Proven track record of designing user-centered 
              experiences that improve engagement and streamline workflows.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <MapPin size={20} />
              <span className="font-medium text-primary">Based in Chennai, India</span>
            </div>
          </div>
          
          <div className="about-card glass-panel animate-fade-in-up delay-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={28} className="text-accent" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="education-item mb-4 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                <h4 className="text-lg font-semibold text-primary">B.Sc. Statistics</h4>
                <p className="text-secondary">Dr. Ambedkar Government Arts & Science College</p>
              </div>
            </div>
            
            <div className="coursework">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Relevant Coursework</h5>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag text-xs font-medium px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)]">Data Visualization</span>
                <span className="skill-tag text-xs font-medium px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)]">Statistical Analysis</span>
                <span className="skill-tag text-xs font-medium px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)]">Research Methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
