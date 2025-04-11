import React, { useState, useEffect } from 'react';
import MyNavbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import WelcomeMessage from './components/welcome Notes/WelcomeMessage';
import OfflineCandle from './components/Offline/OfflineCandle'; 
import ChatBot from './components/Chat Bot/ChatBot';

import './style/button.css';
import './style/main.css'; 
import './style/darkmode.css';
import './style/herosection.css';
import './style/socialmediaicon.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      className={
        isOffline
          ? 'offline-mode' 
          : isDarkMode
          ? 'bg-dark text-light'
          : 'bg-light text-dark'
      }
    >
      <Cursor />
      {isOffline ? (
        <OfflineCandle />
      ) : (
        <>
          <MyNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <About isDarkMode={isDarkMode} />
          <ChatBot isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
          <WelcomeMessage isDarkMode={isDarkMode} />
        </>
      )}
    </div>
  );
};

export default App;
