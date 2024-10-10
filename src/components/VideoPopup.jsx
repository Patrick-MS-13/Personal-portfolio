import React, { useState } from 'react';
import './../style/videopopup.css'; // Create a CSS file for styles

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Clickable image */}
      <img
        src="/path/to/your/image.jpg" // Replace with your image path
        alt="Thumbnail"
        onClick={handleImageClick}
        style={{ cursor: 'pointer', width: '300px', height: 'auto' }} // Adjust size as needed
      />

      {/* Video Popup */}
      {isOpen && (
        <div className="video-popup">
          <div className="video-popup-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <video controls autoPlay>
              <source src="/path/to/your/video.mp4" type="video/mp4" /> {/* Replace with your video path */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
