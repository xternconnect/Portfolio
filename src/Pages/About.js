import React from 'react';

const About = () => {
  const timeline = [
    {
      year: "Apr. 2025 – Sept. 2025",
      title: "UI/UX Intern",
      company: "USAM – An EdTech and career platform for Arab students and professionals (Remote)",
      description: "Completed two onboarding sessions focused on personal development and company operations. Worked collaboratively with the team on redesigning a company website set to launch soon."
    },
    {
      year: "Apr. 2025 – Sept. 2025",
      title: "Freelance Full-Stack Developer",
      company: "Casa.kt – Furniture and Kitchen Manufacturing (Hybrid: Maadi / Remote)",
      description: "Developed a complete desktop application using Electron, React, and Node.js with MongoDB integration. Created professional PDF reports integrating component details, client information, and product images. Analyzed business processes and requirements, then translated them into tailored technical solutions that streamlined workflows."
    },
    {
      year: "Feb. 2024 – Jul. 2025",
      title: "Project Lead",
      company: "ExternIT – Graduation Project",
      description: "Led and managed the project from concept to implementation, coordinating tasks among team members and ensuring timely delivery. A task outsourcing platform connecting university students with companies for freelance-style work opportunities. Contributed across the full project lifecycle including market research, UI/UX design, development, and testing."
    },
    {
      year: "Sept. 2021 – Aug. 2025",
      title: "Bachelor Student",
      company: "Arab Academy For Science, Technology — Sheraton Campus",
      description: "Bachelor of Business Information Systems. Graduated with focus on digital innovation, user-centric design, and full-stack development."
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
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Specialized in creating user-centered digital experiences"
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend technologies"
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
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo" />
                </div>
                <h3>React Basics</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/3c076774f505213b0df4ed7b0beb31a2" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo" />
                </div>
                <h3>Programming with JavaScript</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/2ac25e04eb3516144d979537fe73fea4" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo" />
                </div>
                <h3>Principles of UX/UI Design</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/c93c9a7b3f3850280472730199863804" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="company-logo" />
                </div>
                <h3>UX: Empathize, Ideate</h3>
                <div className="cert-issuer">Google - Coursera</div>
                <a href="https://coursera.org/share/1f2bf0120d747c940fa0e0a659eaba19" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="company-logo" />
                </div>
                <h3>UI/UX Summer Camp</h3>
                <div className="cert-issuer">Sprints - Microsoft</div>
                <a href="https://sprints.ai/en-eg/journeys/learning/ID%20-%20SPR%20-%206A2VR8/view-certificate-serial" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo" />
                </div>
                <h3>Intro to Front-End Dev</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/8c06891f1cb579c94c3b0932c68d78f2" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="company-logo" />
                </div>
                <h3>Fundamentals of Digital Marketing</h3>
                <div className="cert-issuer">Google Digital Garage</div>
                <a href="https://drive.google.com/file/d/1ZJLhVsMHGZC6EuKQkvEgLh1_iyHKYnyO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" className="company-logo" />
                </div>
                <h3>Social Media Marketing</h3>
                <div className="cert-issuer">HP LIFE</div>
                <a href="https://www.life-global.org/certificate/7345c0df-b6dc-4503-a1ee-22f40c7432cb" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
              </div>
              <div className="certification-item">
                <div className="cert-company-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo" />
                </div>
                <h3>Advanced React</h3>
                <div className="cert-issuer">Meta - Coursera</div>
                <a href="https://coursera.org/share/advanced-react-certificate" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
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
