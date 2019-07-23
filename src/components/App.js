/* App container */
import React from "react";
import DisplayProjects from "./DisplayProjects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <DisplayProjects />
      <Footer />
    </div>
  );
};

export default App;
