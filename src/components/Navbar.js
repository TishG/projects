import React from "react";

const Navbar = () => {
  return (
    <nav>
        <a
          href="https://latishagriffiths.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
        >
          <h1>PROJECTS</h1>
        </a>
      <div className="nav-links">
        <a
          href="https://latishagriffiths.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <ion-icon name="link" />
        </a>
        <a
          href="https://github.com/TishG/vue-todo"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <ion-icon name="logo-github" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
