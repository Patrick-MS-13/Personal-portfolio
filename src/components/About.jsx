import React from "react";
import profileImage from "./../img/file.png"; // Adjust the path according to your folder structure
import batman from "./../img/batman.png"; // Adjust the path according to your folder structure
import cvFile from "../file/PATRICK's Resume.pdf"; // Adjust the path to your CV file
import linkedin from "./../img/linkedin.svg";
import github from "./../img/github.svg";
import resume from "./../img/resume.svg";
// import Imbatman from "./../img/I'm-batman.png";
import './../style/about.css';

const About = ({ isDarkMode }) => (
  <section
    id="about"
    className={`about-section py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
  >
    <div className="container d-flex flex-wrap flex-md-row align-items-center">
      {/* About Me Section */}
      <div className="about-content" style={{ flex: "1", marginLeft: "80px" }}>
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
          , a Frontend Developer with a passion for creating interactive,
          user-friendly web applications. I have experience with HTML, CSS,
          JavaScript, React, and Redux, and have worked on various projects,
          including CRM systems and email builders.
        </p>

        {/* Social Links */}
        <div className="social-links mt-4 d-flex justify-content-start align-items-center gap-3">
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
          className="img-fluid image-animation" // Add animation class here
          style={{
            borderRadius: "10%",
            width: "600px", // Adjust the width as needed
            height: "auto",
            marginTop: isDarkMode ? "-78px" : "-70px",
            marginBottom: isDarkMode ? "-380px" : "-235px",
            marginLeft: "95px",
          }}
        />
      </div>
    </div>
  </section>

);

export default About;
