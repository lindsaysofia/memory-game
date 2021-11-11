import React from 'react';
import '../styles/Scoreboard.css';

function Scoreboard(props) {
  const {
    level,
    currentScore,
    bestScore,
    levelScore,
  } = props;
  return (
    <div className="Scoreboard">
      <p>Current Score: {currentScore}</p>
      <i className="fas fa-bolt"></i>
      <p>Best Score: {bestScore}</p>
      <i className="fas fa-bolt"></i>
      <p>Level {level} Score: {levelScore} / {4 + ((level - 1) * 2)}</p>
    </div>
  );
}

export default Scoreboard;