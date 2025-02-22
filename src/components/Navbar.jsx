import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import nightmode from "./../img/night-mode.png";
import "./../style/navbar.css";
import "./../style/darkmode.css";

const MyNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const [currentDateTime, setCurrentDateTime] = useState({ date: "", time: "", period: "" });

  // Function to update the current date and time
  const updateDateTime = () => {
    const now = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);

    let hours = now.getHours();
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    setCurrentDateTime({ date: formattedDate, time: formattedTime, period });
  };

  // Update the date and time every second
  useEffect(() => {
    updateDateTime(); // Initial call
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={`navbar-brand ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
          {currentDateTime.date} | {currentDateTime.time}
          <span className="time-period">{currentDateTime.period}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => scrollToSection("about")}
              className={isDarkMode ? "text-light" : "text-dark"}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("skills")}
              className={isDarkMode ? "text-light" : "text-dark"}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("projects")}
              className={isDarkMode ? "text-light" : "text-dark"}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className={isDarkMode ? "text-light" : "text-dark"}
            >
              Contact
            </Nav.Link>
            {isDarkMode ? (
              <Button
                variant="light"
                onClick={toggleDarkMode}
                className="button day-mode ms-2"
                style={{width : "187px", height : "77px"}}
              >
               <span>BatMan</span>
              </Button>
            ) : (
              <Button
                variant="light"
                onClick={toggleDarkMode}
                className="button ms-2"
                style={{width : "187px", height : "77px"}}
              >
                call the batman
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
