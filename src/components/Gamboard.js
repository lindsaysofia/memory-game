import React from 'react';
import Card from './Card';
import '../styles/Gameboard.css'

function Gameboard(props) {
  const { currentCards, handleClick, isLoading, alreadyClicked } = props;
  if (alreadyClicked) {
    return <h2>Oops, you already clicked that card! Please restart the level or restart the game.</h2>
  } else if (isLoading) {
    return (
      <h2>Loading...</h2>
    );
  } else {
    return (
      <div className="Gameboard">
        {currentCards.map((card, index) => {
          return (
            <Card
              key={card.card.id}
              card={card}
              handleClick={handleClick}
              index={index}
            />
          );
        })}
      </div>
    );
  }  
}

export default Gameboard;