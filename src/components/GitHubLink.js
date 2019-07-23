import React from "react";

const GithubLink = () => {
  return (
    <a
      href="https://github.com/TishG/"
      target="_blank"
      className="btn github-link"
      rel="noopener noreferrer"
    >
      <div className="d-flex justify-content-between align-items-center">GitHub <ion-icon name="logo-github"></ion-icon></div>
    </a>
  );
};

export default GithubLink;
