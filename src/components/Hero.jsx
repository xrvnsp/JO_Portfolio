import React from 'react';
import { Mail, Link, ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-content text-center animate-fade-in-up">
          <div className="status-badge glass-panel inline-block mb-3 py-1 px-4 rounded-full text-sm">
            <span className="status-dot"></span> Available for new opportunities
          </div>
          
          <h1 className="hero-title">
            <span className="block text-xl md:text-2xl text-secondary mb-2 font-normal">Hi, I'm</span>
            <span className="text-gradient">Jothi</span>
          </h1>
          
          <h2 className="hero-subtitle delay-100">
            UI/UX Designer & Front-End Developer
          </h2>
          
          <p className="hero-description mx-auto max-w-2xl delay-200">
            Crafting intuitive interfaces for immersive 3D, VR, and web platforms. Bridging the gap between 
            design and development with 5+ years of experience in user-centered experiences.
          </p>
          
          <div className="hero-cta flex flex-wrap justify-center gap-4 delay-300">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="mailto:jothilakshmi479@gmail.com" className="btn-secondary">
              <Mail size={18} /> Contact Me
            </a>
            <a href="https://linkedin.com/in/jothiRao" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Link size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
    </section>
  );
};

export default Hero;
