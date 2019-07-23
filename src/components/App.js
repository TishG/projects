/* App container */
import React from "react";
import DisplayProjects from "./DisplayProjects";
import GithubLink from "./GitHubLink";
import PortfolioLink from "./PortfolioLink";
import "../index.css";

const App = () => {
  return (
    <div className="container text-center my-4">
      <h1>
        Projects
        <a
          className="text-dark"
          href="https://latishagriffiths.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span id="title-span" className="ml-1">
            By Tish Griffiths
          </span>
        </a>
      </h1>
      <DisplayProjects />
      <GithubLink />
      <PortfolioLink />
    </div>
  );
};

export default App;
