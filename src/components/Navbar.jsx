import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
      className={`${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
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
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link onClick={() => scrollToSection("about")} className={isDarkMode ? "text-light" : "text-dark"} style={{ margin : "22px", fontSize: "30px"}}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("skills")} className={isDarkMode ? "text-light" : "text-dark"}style={{ margin : "22px", fontSize: "30px"}}>
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projects")} className={isDarkMode ? "text-light" : "text-dark"}style={{ margin : "22px", fontSize: "30px"}}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className={isDarkMode ? "text-light" : "text-dark"}style={{ margin : "22px", fontSize: "30px"}}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Button remains visible on all screen sizes */}
        <div className="ms-auto">
          {isDarkMode ? (
            <Button variant="light" onClick={toggleDarkMode} className="button day-mode" style={{ width: "90", height: "30" }}>
              <span style={{ height: "22px", paddingTop: "3px", fontSize: "11px" }}>BatMan</span>            </Button>
          ) : (
            <Button variant="light" onClick={toggleDarkMode} className="button" style={{ width: "90px", height: "30px" }}>
              <p style={{ width: "53", height: "23px"}}>call the batman</p>
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
