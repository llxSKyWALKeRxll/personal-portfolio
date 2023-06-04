import React from "react";
import "./ProjectBackdrop.css";
import useComponentVisible from "./useComponentVisible";

const ProjectBackdrop = ({ onClose, project }) => {
  const { ref } = useComponentVisible(true);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };
  return (
    <div className="project-backdrop" onClick={handleClickOutside}>
      <div className="project-backdrop-content" ref={ref}>
        <div className="project-backdrop-close" onClick={onClose}>
          <span>&times;</span>
        </div>
        <div className="project-backdrop-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-backdrop-image"
          />
        </div>
        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.long_description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBackdrop;
