import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/project.css";
import ReactIcon from "./../img/icons8-react.svg";
import JavaScriptIcon from "./../img/icons8-javascript.svg";
import CSSIcon from "./../img/icons8-css-logo.svg";
import rocket from "./../img/rocket.svg"; // Import the rocket SVG

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      pic: "./images/Todo-list.png",
      name: "TODO-LIST",
      url: "https://vijayk23.github.io/Todolist/",
      description:
        "Efficiently manage tasks with our intuitive todo-list app. Stay organized and boost productivity on the go!",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      pic: "./images/calculator.png",
      name: "CALCULATOR",
      url: "https://vijayk23.github.io/Calculator/",
      description:
        "Streamline your calculations with our user-friendly calculator app. Accurate solutions for equations on the fly.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      pic: "./images/STOPWATCH.png",
      name: "STOP WATCH",
      url: "https://vijaykstopwatch.netlify.app/",
      description:
        "React stopwatch: A simple timer app with start, stop, and reset functionality to track elapsed time accurately.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      // pic: "./images/Chess Board.png",
      name: "ANALOG CLOCK",
      url: "https://m00n-clock.netlify.app/",
      description:
        "Experience time in a timeless way with our Analog Clock app. Elegantly designed to bring a classic touch to your device, it’s more than just telling time—it’s a style statement. Stay punctual and inspired, all in one glance.",
        skills: ["React", "JavaScript", "CSS"],
    },
    {
      pic: "./images/personal portfolio.png",
      name: "PERSONAL PORTFOLIO",
      url: "https://vijay23.netlify.app/",
      description:
        "Explore my journey through innovative projects and skills in my personal portfolio app. Discover my creative world.",
      skills: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <div
      className={`projects-section text-center py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
    >
      <h2
        id="projects"
        className={`mb-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
      >
        Projects
      </h2>
      <div className="row">
        {projects.map((pro) => (
          <div key={pro.name} className="col-md-4 mb-4">
            <Project proj={pro} isDarkMode={isDarkMode} />
          </div>
        ))}
      </div>
    </div>
  );
};

function Project({ proj, isDarkMode }) {
  // Function to get the corresponding SVG icon for the skill
  const getSkillIcon = (skill) => {
    switch (skill) {
      case "React":
        return <img src={ReactIcon} alt="React" width="24" className="me-1" />;
      case "JavaScript":
        return <img src={JavaScriptIcon} alt="JavaScript" width="24" className="me-1" />;
      case "CSS":
        return <img src={CSSIcon} alt="CSS" width="24" className="me-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`project-card ${isDarkMode ? "light-card" : "bg-light text-dark"
        } h-100`}
    >
      <div className="card-body">
        <h4 className="project-title">{proj.name}</h4>
        <p className="project-description">{proj.description}</p>
        <div className="project-skills mb-3">
          {proj.skills.map((skill, index) => (
            <span key={index} className="badge bg-secondary me-2">
              {getSkillIcon(skill)} {/* Only display the icon */}
            </span>
          ))}
        </div>
        <a href={proj.url} className="live-url-button">
          Go live <img src={rocket} alt="Rocket" width="20" className="ms-1" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
