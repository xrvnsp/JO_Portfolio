import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import { ArrowUp } from 'lucide-react';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container overflow-hidden">
      {/* Navbar Minimal */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 glass-panel navbar border-x-0 border-t-0 rounded-none px-6 py-4 flex justify-between items-center"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="font-heading font-bold text-xl tracking-tight">
          J<span className="text-accent">othi</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-secondary">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        </div>
        <a href="mailto:jothilakshmi479@gmail.com" className="btn-primary text-sm py-2 px-4">
          Hire Me
        </a>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <footer className="py-8 text-center border-t border-[rgba(255,255,255,0.05)] text-secondary text-sm glass-panel rounded-none border-x-0 border-b-0 mt-12">
        <div className="container flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} Jothi. All rights reserved.</p>
          <div className="flex gap-4 opacity-70">
            <a href="https://linkedin.com/in/jothiRao" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:jothilakshmi479@gmail.com" className="hover:text-accent transition-colors">Mail</a>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
