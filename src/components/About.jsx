import React from "react";
import profileImage from "./../img/Patrick.png"; // Adjust the path according to your folder structure
import batman from "./../img/batman.png"; // Adjust the path according to your folder structure
import cvFile from "../file/PATRICK's Resume.pdf"; // Adjust the path to your CV file
import linkedin from "./../img/linkedin.svg";
import github from "./../img/github.svg";
import resume from "./../img/resume.svg";
import Imbatman from "./../img/I'm-batman.png";
import './../style/about.css';

const About = ({ isDarkMode }) => (
  <section id="about" className={`about-section py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
    <div className="container text-center">
      <h2
        className="mb-4"
        style={{
          width: "175px",
          height: "50px",
          margin: "0 auto", // Center horizontally
          textAlign: "center", // Center text within the h2 element
          fontWeight: "900" // Set font weight to normal
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

      <div className="d-flex justify-content-center align-items-center mb-3">
        <img
          src={isDarkMode ? batman : profileImage} // Conditional rendering
          alt="Profile or Batman"
          className="img-fluid rounded-custom"
          width="200"
          style={{ borderRadius: '10%' }}
        />
        {isDarkMode && (
          <img
            src={Imbatman} // Show Imbatman image only when batman image is shown
            alt="I'm Batman"
            className="img-fluid rounded-custom ms-3" // Add margin to the left for spacing
            width="200"
            style={{ borderRadius: '10%' }}
          />
        )}
      </div>

      {/* Social Links */}
      <div className="social-links mt-4">
        <a
          href="https://www.linkedin.com/in/patrick-ms-a9a435231"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          <img src={linkedin} alt="LinkedIn" width="40" />
        </a>
        <a
          href="https://github.com/Patrick-MS-13"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          <img src={github} alt="GitHub" width="40" />
        </a>
        <a
          href={cvFile} // Link to your CV
          download // This attribute prompts a download
        >
          <img src={resume} alt="My CV" width="40" />
        </a>
      </div>
    </div>
  </section>
);

export default About;
