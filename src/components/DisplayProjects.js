/* store info for each project in state, an array of objects, class component, display projects (flex) */

import React from "react";
import ProjectCard from "./ProjectCard";

class DisplayProjects extends React.Component {
  state = {
    projects: [
      {
        name: "List",
        imageURL: "https://i.ibb.co/HdB9wDG/list.png",
        link: "https://tishg-list.herokuapp.com/",
        description:
          "An application in which users can log in and view and modify items to a shared list in real time.",
        builtWith: "Node, Express, and Bootstrap."
      },
      {
        name: "Blocipedia",
        imageURL: "https://i.ibb.co/VMphvVK/blocipedia.png",
        link: "https://tishg-blocipedia-node.herokuapp.com",
        description:
          "A unique clone of wikipedia. Users can create, view and collaborate on 'wikis'.",
        builtWith: "Node, Express, and Bootstrap."
      },
      {
        name: "KelpCamp",
        imageURL: "https://i.ibb.co/PZZW2f4/kelp-camp.png",
        link: "https://tishg-kelpcamp.herokuapp.com/",
        description:
          "Users can add campgrounds and post comments as well as view campgrounds, comments, and user profiles.",
        builtWith: "Node, Express, and Bootstrap."
      },
      {
        name: "Todo jQuery",
        imageURL: "https://i.ibb.co/fMjsYkt/j-Query-todo.png",
        link: "https://tishg.github.io/todo-jquery/",
        description: "A simple todo application.",
        builtWith: "HTML, CSS, and jQuery."
      },
      {
        name: "Restaurant API",
        imageUrl: "https://i.ibb.co/47wzS5f/restaurant-api.png",
        link: "https://restaurant-api-capstone.herokuapp.com/",
        description:
          "Built to help users find places to eat based on location or cuisine.",
        builtWith: "Node, Express, Zomato API, and Bootstrap."
      },
      {
        name: "Bloccit",
        imageURL: "https://i.ibb.co/8mBv7wk/bloccit.png",
        link: "https://tishg-bloccit-b.herokuapp.com/",
        description:
          "A clone of reddit in which users can share, post, comment, and like.",
        builtWith: "Node, Express, and Bootstrap."
      },
      {
        name: "Coins Converter",
        imageURL:
          "https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        link: "https://tishg.github.io/pennies-converter/",
        description:
          "This application is still in the works. It currently converts pennies into dollars, quarters, dimes, nickels, and pennies.",
        builtWith: "React."
      },
      {
        name: "Vue Todo",
        imageURL: "https://i.ibb.co/pyNRZwW/vue-todo-photo.png",
        link: "https://vue-todo-bdad4.firebaseapp.com",
        description: "A todo application built with Vue.",
        builtWith: "Vue."
      },
      {
        name: "Amazon Product Page",
        imageURL: "https://i.ibb.co/Z1y1XTv/screen-size.png",
        link: "https://tishg.github.io/amazon_product_website/",
        description: "Simple website to advertise an amazon user's product",
        builtWith: "HTML, CSS, Bootstrap, and jQuery."
      },
      {
        name: "ViewTube",
        imageURL: "https://i.ibb.co/51Jy5KR/screen-size.png",
        link: "https://tishg.github.io/view-tube",
        description: "A responsive video player application",
        builtWith: "React and Bootstrap"
      },
      {
        name: "LLoyds of London clone",
        imageURL: "https://i.ibb.co/tMf96z5/screen-size.png",
        link: "https://tishg.github.io/lloyds-of-london-clone/",
        description:
          "A clone of the Lloyds of London 'Taking control' page. Completed as part of my pre-work for chingu.",
        builtWith: "HTML, CSS, jQuery"
      }
    ]
  };
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.imageURL}
            link={project.link}
            description={project.description}
            builtWith={project.builtWith}
          />
        ))}
      </div>
    );
  }
}

export default DisplayProjects;
