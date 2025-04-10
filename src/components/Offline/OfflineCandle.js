// src/components/OfflineCandle.js
import React from 'react';
import './OfflineCandle.css'; // Make sure this file contains the candle CSS

const OfflineCandle = () => {
    return (
        <div className="offline-background">
            <div className="holder">
                <p className="offline-message">
                    You are offline. Please check your internet connection.
                </p>
                <div className="candle">
                    <div className="blinking-glow"></div>
                    <div className="thread"></div>
                    <div className="glow"></div>
                    <div className="flame"></div>
                </div>
            </div>
        </div>
    );
};

export default OfflineCandle;
