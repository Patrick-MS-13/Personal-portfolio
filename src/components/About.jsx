import React from "react";
import profileImage from "./../img/file.png";
import batman from "./../img/batman.png";
import cvFile from "../file/PATRICKs resume.pdf";
import './../style/about.css';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Download, Linkedin } from "lucide-react";


const About = ({ isDarkMode }) => (
  <section
    id="about"
    className={`about-section py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
  >
    <div className="container-about d-flex flex-wrap flex-md-row align-items-center">
      {/* About Me Section */}
      <div className="about-content" style={{ flex: "1" }}>
        <h2
          className="mb-4"
          style={{
            width: "175px",
            height: "50px",
            textAlign: "center",
            fontWeight: "900",
          }}
        >
          About Me
        </h2>
        <p className="mb-4">
          Hi, I'm{" "}
          <strong
            style={{
              color: isDarkMode ? "yellow" : "black",
            }}
          >
            {isDarkMode ? "PATRICK BATMAN" : "Patrick MS"}
          </strong>
          , a {" "}
          <span>
            <Typewriter
              words={["Frontend Developer", "Web Developer", "JavaScript Enthusiast"]}
              loop={0}
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
            <Linkedin size={30} style={{ color: "black" }} />
          </a>
          <a
            href="https://github.com/Patrick-MS-13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={30} style={{ color: "black" }} />
          </a>
          <a href={cvFile} download>
            <Download size={30} style={{ color: "black" }} />
          </a>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="profile-image" style={{ flex: "1", textAlign: "center" }}>
        <img
          src={isDarkMode ? batman : profileImage}
          alt="Profile or Batman"
          className="profile-image img-fluid image-animation"
          style={{
            marginTop: isDarkMode ? "-78px" : "-90px",
            marginBottom: isDarkMode ? "-380px" : "-252px",
          }}
        />
      </div>
    </div>
  </section>
);

export default About;
