/* put together one single project card, functional component */
import React from "react";

const ProjectCard = ({ image, name, description, builtWith, link }) => {
  return (
    <div className="card col-12 col-md-5 col-lg-3 m-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="card-img-top mt-2" src={image} alt={name} />
      </a>
      <div className="card-body text-left">
        <a className="text-dark project-title-link" href={link} target="_blank" rel="noopener noreferrer">
          <h5 className="card-title">{name}</h5>
        </a>
        <p className="card-text">{description}</p>
        <p className="card-text">Built with: {builtWith}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn view-project-button"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
