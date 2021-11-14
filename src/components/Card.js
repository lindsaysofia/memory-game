import React from 'react';
import '../styles/Card.css';

function Card(props) {
  const { card, handleClick, index } = props;
  return (
    <div 
      className="Card"
      onClick={handleClick}
      data-index={index}
    >
      <img 
        alt=""
        src={card.card.card_images[0].image_url_small}
        data-index={index}
      />
      <p data-index={index}>{card.card.name}</p>
    </div>
  );
}

export default Card;