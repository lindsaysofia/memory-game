import React from 'react';
import '../styles/RestartGame.css';

function RestartGame(props) {
  const { handleRestartGame } = props;
  return (
    <div className="RestartGame">
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
}

export default RestartGame;