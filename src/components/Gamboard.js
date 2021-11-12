import React from 'react';
import Card from './Card';
import '../styles/Gameboard.css'

function Gameboard(props) {
  const { currentCards } = props;
  console.log(currentCards);
  return (
    <div className="Gameboard">
      {currentCards.map((card) => {
        return (
          <Card
            key={card.card.id}
            card={card}
          />
        );
      })};
    </div>
  );
}

export default Gameboard;