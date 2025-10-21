import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const projects = [
    // Full-Stack Development Projects
    {
      id: "externit",
      title: "ExternIT",
      description: "A task outsourcing web platform connecting university students with companies for freelance work. Led the project from concept to implementation, including market research, UI/UX design, full-stack development, and team management.",
      image: "/assets/externit/project-new.png",
      tags: ["PHP", "JavaScript", "CSS", "Bootstrap", "phpMyAdmin", "Full-Stack"],
      category: "Full-Stack Development",
      link: "https://docs.google.com/document/d/1DtnTie8enbOdJtZtVfyqS0xK-PZ-6pb3/edit?usp=drive_link&ouid=100744939960500774497&rtpof=true&sd=true",
      github: null
    },
    {
      id: "casakt",
      title: "Casa.kt Order Management System",
      description: "A comprehensive desktop application designed for furniture and kitchen manufacturing businesses, featuring bilingual support (English/Arabic) and component-based product configuration with professional PDF report generation.",
      image: "/assets/casa kt/create order.png",
      tags: ["Electron", "React", "Node.js", "MongoDB", "Bilingual Support", "PDF Generation", "Desktop App"],
      category: "Full-Stack Development",
      link: null,
      github: null
    },
    // UI/UX Design Projects
    {
      id: "demoblaze",
      title: "Sprints Summer Camp",
      description: "Redesigned DemoBlaze tech e-commerce website as part of Sprints x Microsoft Summer UI/UX Camp. Improved user experience by identifying key usability issues and creating a modern, user-centered redesign with interactive flows.",
      image: "/assets/Sprints sumer/final ui/homepage.png",
      tags: ["Figma", "UI/UX Design", "E-Commerce", "Prototyping", "Sprints Camp"],
      category: "UI/UX Design",
      link: null,
      github: null
    },
    {
      id: "amazon-eg",
      title: "Amazon.eg Homepage Redesign",
      description: "Mobile app homepage redesign focused on improving usability, accessibility, and shopping experience. Addressed cluttered interface with better hierarchy, cleaner visuals, and clearer call-to-actions.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      tags: ["Figma", "Mobile Design", "User Research", "Usability Testing"],
      category: "UI/UX Design",
      link: null,
      github: null
    },
    {
      id: "aast-app",
      title: "AAST App Redesign",
      description: "UX case study redesigning the AAST mobile app to simplify navigation and integrate attendance tracking. Improved information structure and enhanced usability based on user research.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tags: ["Figma", "Mobile UX", "User Research", "Case Study"],
      category: "UI/UX Design",
      link: null,
      github: null
    },
    {
      id: "evently",
      title: "Evently - Event Planning App",
      description: "Mobile app designed to simplify event planning and management. Features clean interface with personalized feeds, simple event creation, and calendar integration for improved user engagement.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
      tags: ["Figma", "Mobile App", "UI Design", "User Research"],
      category: "UI/UX Design",
      link: null,
      github: null
    }
  ];

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

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-description">
            A collection of my recent work in UI/UX design and full-stack development. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <span>↑</span>
        </button>
      )}
    </div>
  );
};

export default Projects;
