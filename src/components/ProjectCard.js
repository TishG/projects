/* put together one single project card, functional component */
import React from "react";

const ProjectCard = ({ image, name, description, builtWith, link }) => {
  return (
    <a
      className="card col-11 col-md-5 col-lg-3 m-2"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="card-img-top mt-2" src={image} alt={name} />

      <div className="card-body text-left">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Built with: {builtWith}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
