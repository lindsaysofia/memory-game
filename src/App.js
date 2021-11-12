import React, { useState, useEffect } from 'react';
import './App.css';
import Gameboard from './components/Gamboard';
import RestartLevel from './components/RestartLevel';
import Scoreboard from './components/Scoreboard';
import RestartGame from './components/RestartGame';

function App() {
  let data = [];
  const [level, setLevel] = useState(1);
  const [currentScore, setCurrentScore] = useState();
  const [bestScore, setBestScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [currentCards, setCurrentCards] = useState([]);

  async function getData() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', {mode: 'cors'});
    const cardData = await response.json();
    data = cardData.data;
    setCurrentCards(getNewCurrentCards(4 + ((level - 1) * 2)));
  }

  // getData();

  const getRandomInteger = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getNewCurrentCards = (number) => {
    const cards = [];
    const integers = [];
    while (number > 0) {
      let randomInteger = getRandomInteger(data.length);
      while (integers.includes(randomInteger)) {
        randomInteger = getRandomInteger(data.length);
      }
      cards.push({
        card: data[randomInteger],
        clicked: false,
      });
      integers.push(randomInteger);
      number = number -1;
    }
    return cards;
  };

  // from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffleCurrentCards = (cards) => {
    let cardsCopy = cards.slice();
      for (let i = cardsCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cardsCopy[i];
        cardsCopy[i] = cardsCopy[j];
        cardsCopy[j] = temp;
    }
    return cardsCopy;
  }

  const handleClick = () => {
    let newShuffledCards = shuffleCurrentCards(currentCards);
    setCurrentCards(newShuffledCards);
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p>Get points by clicking on an image, but don't click on any more than once!</p>
        <RestartLevel />
        <RestartGame />
      </header>
      <main>
        <Scoreboard 
          level={level}
          currentScore={currentScore}
          bestScore={bestScore}
          levelScore={levelScore}
        />
        <Gameboard 
          currentCards={currentCards}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
}

export default App;
