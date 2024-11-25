import React from "react";
import profileImage from "./../img/file.png"; 
import batman from "./../img/batman.png"; 
import cvFile from "../file/PATRICK's resume.pdf";
import linkedin from "./../img/linkedin.svg";
import github from "./../img/github.svg";
import resume from "./../img/resume.svg";
// import Imbatman from "./../img/I'm-batman.png";
import './../style/about.css';
import { Typewriter } from 'react-simple-typewriter'

const About = ({ isDarkMode }) => (
  <section
    id="about"
    className={`about-section py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
  >
    <div className="container-about d-flex flex-wrap flex-md-row align-items-center">
      {/* About Me Section */}
      <div className="about-content" style={{ flex: "1"}}>
        <h2
          className="mb-4"
          style={{
            width: "175px",
            height: "50px",
            textAlign: "center", // Center text within the h2 element
            fontWeight: "900", // Set font weight to bold
          }}
        >
          About Me
        </h2>
        <p className="mb-4">
          Hi, I'm{" "}
          <strong
            style={{
              color: isDarkMode ? "yellow" : "black", // Set name color to yellow in night mode
            }}
          >
            {isDarkMode ? "PATRICK BATMAN" : "Patrick MS"}
          </strong>
          , a {" "}
          <span>
            <Typewriter
              words={["Frontend Developer", "Web Developer", "JavaScript Enthusiast"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "} with a passion for creating interactive,
          user-friendly web applications. I have experience with HTML, CSS,
          JavaScript, React, and Redux, and have worked on various projects,
          including CRM systems and email builders.
        </p>

        {/* Social Links */}
        <div className="social-links mt-4 d-flex align-items-center gap-3">
          <a
            href="https://www.linkedin.com/in/patrick-ms-a9a435231"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" width="40" />
          </a>
          <a
            href="https://github.com/Patrick-MS-13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" width="40" />
          </a>
          <a href={cvFile} download>
            <img src={resume} alt="My CV" width="40" />
          </a>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="profile-image" style={{ flex: "1", textAlign: "center" }}>
        <img
          src={isDarkMode ? batman : profileImage} // Conditional rendering
          alt="Profile or Batman"
          className="profile-image img-fluid image-animation" // Add animation and profile-image class here
          style={{
            marginTop: isDarkMode ? "-78px" : "-90px",
            marginBottom: isDarkMode ? "-380px" : "-252px",
            // marginLeft: "58px",
          }}
        />

      </div>
    </div>
  </section>

);

export default About;
