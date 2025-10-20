import React from 'react';

const AboutSection = () => {
  const skills = [
    { category: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'] },
    { category: 'Frameworks & Libraries', items: ['Bootstrap', 'jQuery', 'React', 'phpMyAdmin', 'Node.js'] },
    { category: 'Design Tools', items: ['Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'] },
    { category: 'Developer Tools', items: ['Git', 'GitHub', 'XAMPP', 'VS Code', 'Chrome DevTools'] }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm Abdelrahman, a recent graduate in Business Information Systems from AASTMT with a passion for 
              digital innovation and user-centric design. My journey combines technical expertise with creative 
              problem-solving, allowing me to bridge the gap between business requirements and technical solutions.
            </p>
            <p className="about-description">
              With experience in both UI/UX design and full-stack development, I specialize in creating platforms 
              that increase engagement and business value. I'm comfortable in roles involving both business 
              development and design, always focusing on delivering solutions that make a real impact.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Professional Roles</span>
              </div>
              <div className="stat">
                <span className="stat-number">BIS</span>
                <span className="stat-label">Degree Graduate</span>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <h3 className="skills-title">Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{skill.category}</h4>
                  <div className="skill-items">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="skill-item">{item}</span>
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

export default AboutSection;
