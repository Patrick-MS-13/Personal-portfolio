import React, { useEffect, useState } from "react";
import "./../style/cursor.css";
const Cursor = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    // Move cursor with mouse movement
    const moveCursor = (e) => {
      if (cursor) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y + window.scrollY}px`; // Account for scrolling
      }
    };

    // Change cursor style on hover over specific text or button elements
    const handleHover = (e) => {
      if (cursor) {
        // Check if the target element is an H1, H2, BUTTON, A (link), or IMG
        if (
          e.target.tagName === "H1" ||
          e.target.tagName === "H2" ||
          // e.target.tagName === 'H3' ||
          // e.target.tagName === 'IMG' ||
          e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" // Include links
        ) {
          // Get the dimensions of the target element
          const { width, height } = e.target.getBoundingClientRect();
          cursor.style.width = `${width}px`;
          cursor.style.height = `${height}px`;
          cursor.style.borderRadius = "8px";
          cursor.style.transform = `translate(-50%, -50%) scale(1.2)`; // Scale up for a more interactive effect
        } else {
          // Reset the cursor when it's not hovering over the specified elements
          cursor.style.width = "30px"; // Reset to original size
          cursor.style.height = "30px";
          cursor.style.borderRadius = "50%"; // Reset to circular shape
          cursor.style.transform = `translate(-50%, -50%) scale(1)`; // Reset to original scale
        }
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
    };
  }, []);

  if (isMobile) {
    return null; // Don't render the cursor on mobile screens
  }

  return <div className="cursor"></div>; // Render the cursor for larger screens
};

export default Cursor;
