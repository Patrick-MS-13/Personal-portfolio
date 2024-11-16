import React, { useState, useEffect } from "react";
import "./WelcomeMessage.css"; // Import external styles

const WelcomeMessage = ({ message = "Welcome to my portfolio!", delay = 3000, duration = 5000 }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), delay); // Show after `delay` ms
    const hideTimer = setTimeout(() => setShowMessage(false), delay + duration); // Hide after `duration` ms

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    }; // Cleanup on unmount
  }, [delay, duration]);

  if (!showMessage) return null;

  return (
    <div className="welcome-message">
      {message}
    </div>
  );
};

export default WelcomeMessage;
