import React, { useState } from 'react';
import MyNavbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import WelcomeMessage from './components/welcome Notes/WelcomeMessage';
import'./style/button.css'
import './style/main.css'; 
import './style/darkmode.css';
import './style/herosection.css';
import './style/socialmediaicon.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <Cursor /> 
      <MyNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> 
      <About isDarkMode={isDarkMode} /> 
      <Skills isDarkMode={isDarkMode} /> 
      <Projects isDarkMode={isDarkMode} /> 
      <Contact isDarkMode={isDarkMode} /> 
      <Footer isDarkMode={isDarkMode} /> 
      <WelcomeMessage isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
