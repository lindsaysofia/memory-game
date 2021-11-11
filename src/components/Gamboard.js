import React from 'react';
import Card from './Card';
import '../styles/Gameboard.css'

function Gameboard() {
  return (
    <div className="Gameboard">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Gameboard;