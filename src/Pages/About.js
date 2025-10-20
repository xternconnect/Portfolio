import React from 'react';

const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "UI/UX Intern",
      company: "USAM - EdTech Platform",
      description: "Completed onboarding sessions and collaborated on redesigning company website. Worked with team on user experience improvements for Arab students and professionals."
    },
    {
      year: "2025",
      title: "Freelance Full-Stack Developer",
      company: "Casa.kt - Furniture Manufacturing",
      description: "Developed complete desktop application using Electron, React, and Node.js with MongoDB. Created professional PDF reports and streamlined business workflows."
    },
    {
      year: "2024-2025",
      title: "Project Lead",
      company: "ExternIT - Graduation Project",
      description: "Led task outsourcing platform development from concept to implementation. Coordinated team tasks, managed project lifecycle including market research, UI/UX design, development, and testing."
    },
    {
      year: "2021-2025",
      title: "Bachelor Student",
      company: "AASTMT - Business Information Systems",
      description: "Graduated with Bachelor's degree in Business Information Systems. Focused on digital innovation, user-centric design, and full-stack development."
    }
  ];

  const achievements = [
    {
      icon: "🎓",
      title: "Bachelor's Degree",
      description: "Graduated in Business Information Systems from AASTMT"
    },
    {
      icon: "📜",
      title: "8+ Certifications",
      description: "Completed certifications from Meta, Google, Microsoft, and HP LIFE"
    },
    {
      icon: "💼",
      title: "Professional Experience",
      description: "Gained experience in both UI/UX design and full-stack development"
    },
    {
      icon: "🚀",
      title: "Project Leadership",
      description: "Successfully led graduation project from concept to completion"
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-photo">
              <img src={require('../Assets/myPhoto.png')} alt="Abdelrahman" className="about-photo" />
            </div>
            <div className="about-hero-text">
              <h1 className="about-hero-title">About Me</h1>
              <p className="about-hero-description">
                I'm Abdelrahman, a passionate designer and developer who believes in creating 
                meaningful digital experiences that make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h2 className="section-title">My Story</h2>
            <div className="story-content">
              <p>
                My journey into design and development started with a simple curiosity 
                about how things work. I was fascinated by the intersection of technology 
                and human behavior, which led me to explore both the creative and technical 
                aspects of digital product creation.
              </p>
              <p>
                Over the years, I've had the privilege of working with amazing teams and 
                clients, each project teaching me something new about user needs, business 
                goals, and the art of problem-solving through design and code.
              </p>
              <p>
                Today, I continue to push boundaries, experiment with new technologies, 
                and create products that not only look beautiful but also solve real 
                problems for real people.
              </p>
            </div>
          </div>

          <div className="about-timeline">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-achievements">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-certifications">
            <h2 className="section-title">Certifications & Courses</h2>
            <div className="certifications-grid">
              <div className="certification-item">
                <h3>React Basics</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/3c076774f505213b0df4ed7b0beb31a2" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <h3>Programming with JavaScript</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/2ac25e04eb3516144d979537fe73fea4" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <h3>Principles of UX/UI Design</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/c93c9a7b3f3850280472730199863804" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <h3>UX: Empathize, Ideate</h3>
                <div className="cert-issuer">Google - Coursera</div>
                <a href="https://coursera.org/share/1f2bf0120d747c940fa0e0a659eaba19" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <h3>UI/UX Summer Camp</h3>
                <div className="cert-issuer">Sprints - Microsoft</div>
                <a href="https://sprints.ai/en-eg/journeys/learning/ID%20-%20SPR%20-%206A2VR8/view-certificate-serial" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <h3>Intro to Front-End Dev</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/8c06891f1cb579c94c3b0932c68d78f2" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h2 className="section-title">My Values</h2>
            <div className="values-content">
              <div className="value-item">
                <h3>User-Centered Design</h3>
                <p>Every decision I make is guided by user needs and research insights.</p>
              </div>
              <div className="value-item">
                <h3>Continuous Learning</h3>
                <p>I believe in staying curious and constantly improving my skills through certifications and practice.</p>
              </div>
              <div className="value-item">
                <h3>Collaboration</h3>
                <p>The best solutions come from working together with diverse teams and stakeholders.</p>
              </div>
              <div className="value-item">
                <h3>Business Impact</h3>
                <p>I focus on creating solutions that deliver real business value and user engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
