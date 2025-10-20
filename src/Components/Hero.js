import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Product Designer <span className="accent">& Developer</span></span>
            </h1>
            <p className="hero-description">
              A graduate in Business Information Systems who is enthusiastic about digital innovation and user-centric design. 
              Competent in digital strategy, full-stack development, and UI/UX. I create platforms that increase engagement 
              and business value from conception to launch.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-container">
              <img src={require('../Assets/myPhoto.png')} alt="Abdelrahman" className="hero-photo" />
            </div>
            <div className="floating-card card-1">
              <div className="card-content">
                <div className="card-icon">🎨</div>
                <span>Design</span>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">
                <div className="card-icon">💻</div>
                <span>Code</span>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">
                <div className="card-icon">✨</div>
                <span>Innovate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
