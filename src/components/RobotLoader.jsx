import React from 'react';
import './RobotLoader.css';

const RobotLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="robot-head">
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="scanner"></div>
      </div>
      <h3 style={{
        position: 'absolute', 
        bottom: '20%', 
        color: 'var(--accent-color)', 
        fontFamily: 'monospace',
        letterSpacing: '5px'
      }}>
        LOADING SYSTEM...
      </h3>
    </div>
  );
};

export default RobotLoader;
