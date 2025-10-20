import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, link, github, id } = project;
  
  // Create URL-friendly ID from title
  const projectId = id || title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  return (
    <Link to={`/projects/${projectId}`} className="project-card-link">
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
          <div className="project-overlay">
            <div className="project-links">
              <span className="project-link">
                <span>View Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
