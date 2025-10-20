import React from 'react';

const HomeAbout = () => {
  const skills = [
    { category: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'] },
    { category: 'Frameworks & Libraries', items: ['Bootstrap', 'jQuery', 'React', 'phpMyAdmin', 'Node.js'] },
    { category: 'Design Tools', items: ['Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'] },
    { category: 'Developer Tools', items: ['Git', 'GitHub', 'XAMPP', 'VS Code', 'Chrome DevTools'] }
  ];

  return (
    <section className="home-about-section">
      <div className="home-about-container">
        <div className="home-about-content">
          <div className="home-about-text">
            <h2 className="home-about-title">About Me</h2>
            <p className="home-about-description">
              I'm Abdelrahman, a recent graduate in Business Information Systems from AASTMT with a passion for 
              digital innovation and user-centric design. My journey combines technical expertise with creative 
              problem-solving, allowing me to bridge the gap between business requirements and technical solutions.
            </p>
            <p className="home-about-description">
              With experience in both UI/UX design and full-stack development, I specialize in creating platforms 
              that increase engagement and business value. I'm comfortable in roles involving both business 
              development and design, always focusing on delivering solutions that make a real impact.
            </p>
            <div className="home-about-stats">
              <div className="home-stat">
                <span className="home-stat-number">8+</span>
                <span className="home-stat-label">Certifications</span>
              </div>
              <div className="home-stat">
                <span className="home-stat-number">2</span>
                <span className="home-stat-label">Professional Roles</span>
              </div>
              <div className="home-stat">
                <span className="home-stat-number">BIS</span>
                <span className="home-stat-label">Degree Graduate</span>
              </div>
            </div>
          </div>
          <div className="home-about-skills">
            <h3 className="home-skills-title">Skills & Expertise</h3>
            <div className="home-skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="home-skill-category">
                  <h4 className="home-skill-category-title">{skill.category}</h4>
                  <div className="home-skill-items">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="home-skill-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

