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
      // pic: "./images/Chess Board.png",
      name: "ANALOG CLOCK",
      url: "https://m00n-clock.netlify.app/",
      description: "Experience time in a timeless way with our Analog Clock app. Elegantly designed to bring a classic touch to your device, it’s more than just telling time—it’s a style statement. Stay punctual and inspired, all in one glance.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      // pic: "./images/Chess Board.png",
      name: "TIME APP",
      url: "https://patrick-time-app.netlify.app/",
      description: "The Time App is a versatile and visually engaging time management tool built with React, designed to enhance productivity through features like a world clock, stopwatch, alarm, and reminders. Users can keep track of different time zones, set reminders for important events, and manage tasks efficiently.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      // pic: "./images/calculator.png",
      name: "SPACE TOUR",
      url: "https://space-with-patrick.netlify.app/",
      description: "Embark on an out-of-this-world journey with our Space Tour slider. Explore stunning visuals of the universe, from distant galaxies to breathtaking celestial bodies, and experience the wonders of space like never before.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      // pic: "./images/Todo-list.png",
      name: "IMAGE SLIDER",
      url: "https://patrick-image-slider.netlify.app/",
      description: "Explore breathtaking travel destinations with this image slider. From the serene landscapes of Finland and Iceland to the vibrant charm of Australia, the Netherlands, Ireland, and Switzerland, discover stunning locations that spark wanderlust.",
      skills: ["React", "JavaScript", "CSS"],
    },
    // {
    //   pic: "./images/STOPWATCH.png",
    //   name: "APOLOGY EXPRESS",
    //   url: "https://sorry-from-patrick.netlify.app/",
    //   description: "Apology Express offers a heartfelt way to say sorry with just one click. Send your sincerest apologies and express your emotions in a simple, meaningful gesture. Make amends and show your loved ones how much you care.",
    //   skills: ["React", "JavaScript", "CSS"],
    // },
    {
      // pic: "./images/personal portfolio.png",
      name: "FLYING HEARTS",
      url: "https://lup-tup.netlify.app/",
      description: "Flying Hearts is an interactive web app featuring floating hearts that respond to user interactions. With smooth animations and custom vector graphics, it offers a playful and engaging experience.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      // pic: "./images/personal portfolio.png",
      name: "PERSONAL PROFILE",
      url: "https://patrick-profile-card.netlify.app/",
      description: "An interactive profile card that responds to user interactions with hover effects and smooth transitions.",
      skills: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <div
      className={`container projects-section text-center py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
    >
      <h2
        id="projects"
        className={`col-sm-12 col-md-6 col-lg-12 mb-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`} style={{
            width: "140px", margin: "0 auto", fontWeight: "900",
          }}
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
