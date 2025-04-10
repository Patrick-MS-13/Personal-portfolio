import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/navbar.css";
import "./../style/darkmode.css";

const MyNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const [currentDateTime, setCurrentDateTime] = useState({ date: "", time: "" });
  const [showName, setShowName] = useState(false); // ⬅️ flip between time and name

  // Update current time
  const updateDateTime = () => {
    const now = new Date();
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: userTimeZone,
    });

    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: userTimeZone,
    });

    setCurrentDateTime({ date: formattedDate, time: formattedTime });
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setShowName(prev => !prev);
    }, 5000); // ⏱ every 5 seconds
    return () => clearInterval(flipInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar expand="lg" className={isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}>
      <Container>
        <Navbar.Brand href="#home" className={`navbar-brand ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <div className="flip-card-x">
            <div
              className="flip-card-inner-x"
              style={{
                transform: `rotateX(${showName ? 180 : 0}deg)`
              }}
            >
              {/* Front: Date & Time */}
              <div className="flip-card-front-x"> {currentDateTime.date} | {currentDateTime.time}</div>

              {/* Back: Name */}
              <div className="flip-card-back-x">
                {isDarkMode ? (
                  <div style={{ color: "yellow", fontWeight: "bold" }}>Patrick Batman</div>
                ) : (
                  <div>Patrick MS</div>
                )}
              </div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link onClick={() => scrollToSection("about")} className={isDarkMode ? "text-light" : "text-dark"} style={{ margin: "22px", fontSize: "30px" }}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("skills")} className={isDarkMode ? "text-light" : "text-dark"} style={{ margin: "22px", fontSize: "30px" }}>
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projects")} className={isDarkMode ? "text-light" : "text-dark"} style={{ margin: "22px", fontSize: "30px" }}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className={isDarkMode ? "text-light" : "text-dark"} style={{ margin: "22px", fontSize: "30px" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="ms-auto">
          {isDarkMode ? (
            <Button variant="light" onClick={toggleDarkMode} className="button day-mode" style={{ width: "123px", height: "47px" }}>
              <span style={{ height: "24px", left: "63px", fontSize: "16px" }}>BATMAN</span>
            </Button>
          ) : (
            <Button variant="light" onClick={toggleDarkMode} className="button" style={{ width: "140px", height: "50px" }}>
              <p style={{ width: "109px", height: "22px" }}>call the batman</p>
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
