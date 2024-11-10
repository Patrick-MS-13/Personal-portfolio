import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import "./../style/footer.css"

const Footer = ({ isDarkMode }) => (
  <footer
  className={`footer text-center py-3 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
>
  <div className="container">
    <p>
      &copy; 2024{" "}
      <span style={{ color: isDarkMode ? "yellow" : "inherit", fontWeight: isDarkMode ? "bold" : "normal" }}>
        {isDarkMode ? "Patrick Batman" : "Patrick"}
      </span>
      . All rights reserved.
    </p>
  </div>
  <BackToTopButton isDarkMode={isDarkMode} /> {/* Pass the isDarkMode prop */}
</footer>
);

const BackToTopButton = ({ isDarkMode }) => { // Accept isDarkMode as a prop
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className={`btn position-fixed bottom-0 end-0 m-4 rounded-circle d-flex align-items-center justify-content-center ${isDarkMode ? "bg-light text-dark" : "bg-dark text-white"}`} // Conditional styles
        style={{
          width: '30px', // Increased size for better visibility
          height: '30px',
          zIndex: '9999',
        }}
        aria-label="Back to Top" // Accessibility improvement
      >
        ↑
      </button>
    )
  );
};

export default Footer;
