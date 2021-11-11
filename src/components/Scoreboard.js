import React from 'react';
import '../styles/Scoreboard.css';

function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Current Score: 0</p>
      <i className="fas fa-bolt"></i>
      <p>Best Score: 0</p>
      <i className="fas fa-bolt"></i>
      <p>Level 1 Score: 0 / 4</p>
    </div>
  );
}

export default Scoreboard;