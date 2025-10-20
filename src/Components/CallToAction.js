import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:abdelrahmanelshurbagy@gmail.com';
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Work Together?</h2>
          <p className="cta-description">
            Let's create something amazing together. I'm always excited to take on new projects 
            and collaborate with passionate people.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="cta-btn cta-btn-primary">
              View My Work
            </Link>
            <button onClick={handleEmailClick} className="cta-btn cta-btn-secondary">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

