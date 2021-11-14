import React from 'react';
import '../styles/RestartLevel.css';

function RestartLevel(props) {
  const { handleRestartLevel } = props;
  return (
    <div className="RestartLevel">
      <button onClick={handleRestartLevel}>Restart Level</button>
    </div>
  );
}

export default RestartLevel;