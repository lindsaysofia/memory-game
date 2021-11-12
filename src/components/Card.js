import React from 'react';
import '../styles/Card.css';

function Card(props) {
  const { card, handleClick } = props;
  return (
    <div 
      className="Card"
      onClick={handleClick}
    >
      <img 
        alt=""
        src={card.card.card_images[0].image_url_small}
      />
      <p>{card.card.name}</p>
    </div>
  );
}

export default Card;