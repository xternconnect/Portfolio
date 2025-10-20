import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Project data directly in component
  const projects = {
    "externit": {
      id: "externit",
      title: "ExternIT",
      category: "Full-Stack Development",
      description: "A task outsourcing web platform connecting university students with companies for freelance work. Led the project from concept to implementation, including market research, UI/UX design, full-stack development, and team management.",
      longDescription: "ExternIT is a comprehensive web platform designed to bridge the gap between companies seeking cost-effective task outsourcing and university students looking for practical experience. The platform enables companies to post tasks and students to submit their work, with a fair evaluation system that rewards excellence while providing certificates to all qualifying participants.",
      image: "/assets/externit/project-new.png",
      tags: ["PHP", "JavaScript", "CSS", "Bootstrap", "phpMyAdmin", "Full-Stack"],
      link: "https://docs.google.com/document/d/1rw2l7Ue4Aonv62AXJ_b8DU3sSQ0IzJwK1fuJf3JPhjs/edit?usp=sharing",
      linkText: "View Documentation",
      github: null,
      technologies: [
        { name: "PHP", purpose: "Backend development and server-side scripting" },
        { name: "JavaScript", purpose: "Frontend interactivity and dynamic content" },
        { name: "CSS & Bootstrap", purpose: "Responsive UI design and styling" },
        { name: "MySQL", purpose: "Database management and data storage" },
        { name: "phpMyAdmin", purpose: "Database administration and management" },
        { name: "XAMPP", purpose: "Local development environment" }
      ],
      challenges: [
        "Balancing student workload with task availability",
        "Ensuring quality work from varying skill levels",
        "Building trust between companies and students",
        "Creating fair evaluation and payment systems",
        "Managing legal constraints for student labor",
        "Implementing secure data protection"
      ],
      solutions: [
        "Conducted comprehensive user research and interviews",
        "Developed multi-tier evaluation with feedback systems",
        "Implemented SSL encryption and privacy compliance",
        "Designed intuitive UI with progress tracking",
        "Established clear terms and IP guidelines",
        "Built notification system for transparency"
      ],
      results: [
        "Connected companies with affordable student talent",
        "Provided practical experience and industry exposure",
        "Created scalable platform for expansion",
        "Developed comprehensive database architecture",
        "Implemented secure authentication system",
        "Achieved positive stakeholder feedback"
      ],
      screenshots: [
        { url: "/assets/externit/Homepage.png?v=2", alt: "ExternIT Homepage", caption: "Platform homepage showcasing available tasks and user navigation" },
        { url: "/assets/externit/Student dashboard.png?v=2", alt: "Student Dashboard", caption: "Student interface for viewing available tasks and tracking progress" },
        { url: "/assets/externit/Company dashboard.png?v=2", alt: "Company Dashboard", caption: "Company dashboard for posting and managing tasks" },
        { url: "/assets/externit/Avivable tsks.png?v=2", alt: "Available Tasks", caption: "Task listing page showing all available opportunities for students" },
        { url: "/assets/externit/company all submitons.png?v=2", alt: "All Submissions View", caption: "Overview of all student submissions for a specific task" },
        { url: "/assets/externit/Admin dashboard.png?v=2", alt: "Admin Dashboard", caption: "Administrative panel for platform management and oversight" }
      ],
      presentationDay: [
        { url: "/assets/externit/our team.jpg", alt: "Our Team", caption: "The ExternIT development team during project presentation" },
        { url: "/assets/externit/Presentaion day.gif", alt: "Presentation Day", caption: "Live demonstration of the ExternIT platform during presentation" },
        { url: "/assets/externit/TA Bassem khaled.jpg", alt: "TA Bassem Khaled", caption: "With our Teaching Assistant Bassem Khaled during project evaluation" }
      ]
    },
    "casakt": {
      id: "casakt",
      title: "Casa.kt Desktop Application",
      category: "Full-Stack Development",
      description: "Desktop application for furniture manufacturing company to streamline operations. Manages client information, product details, and generates detailed PDF reports using Electron, React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["Electron", "React", "Node.js", "MongoDB", "Desktop App"]
    },
    "demoblaze": {
      id: "demoblaze",
      title: "DemoBlaze E-Commerce Redesign",
      category: "UI/UX Design",
      description: "Complete UI/UX redesign of DemoBlaze tech e-commerce website. Enhanced usability, visual appeal, and user experience through usability testing, wireframing, and interactive prototyping.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tags: ["Figma", "UI/UX Design", "E-Commerce", "Prototyping"]
    },
    "amazon-eg": {
      id: "amazon-eg",
      title: "Amazon.eg Homepage Redesign",
      category: "UI/UX Design",
      description: "Mobile app homepage redesign focused on improving usability, accessibility, and shopping experience. Addressed cluttered interface with better hierarchy, cleaner visuals, and clearer call-to-actions.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      tags: ["Figma", "Mobile Design", "User Research", "Usability Testing"]
    },
    "aast-app": {
      id: "aast-app",
      title: "AAST App Redesign",
      category: "UI/UX Design",
      description: "UX case study redesigning the AAST mobile app to simplify navigation and integrate attendance tracking. Improved information structure and enhanced usability based on user research.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tags: ["Figma", "Mobile UX", "User Research", "Case Study"]
    },
    "evently": {
      id: "evently",
      title: "Evently - Event Planning App",
      category: "UI/UX Design",
      description: "Mobile app designed to simplify event planning and management. Features clean interface with personalized feeds, simple event creation, and calendar integration for improved user engagement.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
      tags: ["Figma", "Mobile App", "UI Design", "User Research"]
    }
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Navigation */}
        <div className="project-detail-nav">
          <Link to="/projects" className="back-link">
            <span className="back-arrow">←</span>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-detail-header">
          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-detail-info">
            <div className="project-category">{project.category}</div>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {project.linkText || "View Project"}
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-detail-content">
          {/* Overview */}
          <section id="overview" className="project-section">
            <h2>Project Overview</h2>
            <p>{project.longDescription}</p>
          </section>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <section id="technologies" className="project-section">
              <h2>Technologies Used</h2>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="technology-item">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-purpose">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges and Solutions */}
          {project.challenges.length > 0 && project.solutions.length > 0 && (
            <section id="challenges-solutions" className="project-section">
              <h2>Challenges & Solutions</h2>
              <div className="challenges-solutions-container">
                <div className="challenges-section">
                  <h3>Challenges Faced</h3>
                  <ul className="challenges-list">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="solutions-section">
                  <h3>Solutions Implemented</h3>
                  <ul className="solutions-list">
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Results */}
          {project.results.length > 0 && (
            <section id="results" className="project-section">
              <h2>Results</h2>
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <section id="screenshots" className="project-section">
              <h2>Project Screenshots</h2>
              <div className="screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.alt}
                      onClick={() => setSelectedImage(screenshot)}
                    />
                    <p className="screenshot-caption">{screenshot.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Presentation Day */}
          {project.presentationDay && project.presentationDay.length > 0 && (
            <section id="presentation-day" className="project-section">
              <h2>Presentation Day</h2>
              <div className="screenshots-grid">
                {project.presentationDay.map((media, index) => (
                  <div key={index} className="screenshot-item">
                    <img 
                      src={media.url} 
                      alt={media.alt}
                      onClick={() => setSelectedImage(media)}
                    />
                    <p className="screenshot-caption">{media.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Navigation to other projects */}
        <div className="project-navigation">
          <h3>Explore More Projects</h3>
          <div className="project-nav-grid">
            {Object.values(projects)
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`} className="related-project-card">
                  <img src={relatedProject.image} alt={relatedProject.title} />
                  <div className="related-project-info">
                    <h4>{relatedProject.title}</h4>
                    <p>{relatedProject.category}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="section-navigation">
        <button onClick={() => scrollToSection('overview')} className="nav-btn">
          <span>📋</span>
          <span>Overview</span>
        </button>
        {project.technologies.length > 0 && (
          <button onClick={() => scrollToSection('technologies')} className="nav-btn">
            <span>⚙️</span>
            <span>Tech</span>
          </button>
        )}
        {project.challenges.length > 0 && (
          <button onClick={() => scrollToSection('challenges-solutions')} className="nav-btn">
            <span>🎯</span>
            <span>Challenges</span>
          </button>
        )}
        {project.results.length > 0 && (
          <button onClick={() => scrollToSection('results')} className="nav-btn">
            <span>📈</span>
            <span>Results</span>
          </button>
        )}
        {project.screenshots.length > 0 && (
          <button onClick={() => scrollToSection('screenshots')} className="nav-btn">
            <span>🖼️</span>
            <span>Screenshots</span>
          </button>
        )}
        {project.presentationDay && project.presentationDay.length > 0 && (
          <button onClick={() => scrollToSection('presentation-day')} className="nav-btn">
            <span>🎉</span>
            <span>Presentation</span>
          </button>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <span>↑</span>
        </button>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
