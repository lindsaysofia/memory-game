import React from 'react';
import Card from './Card';
import '../styles/Gameboard.css'

function Gameboard(props) {
  const { currentCards, handleClick } = props;
  console.log(currentCards);
  return (
    <div className="Gameboard">
      {currentCards.map((card) => {
        return (
          <Card
            key={card.card.id}
            card={card}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default Gameboard;