import React, { useState, useEffect } from 'react';
import './App.css';
import Gameboard from './components/Gamboard';
import RestartLevel from './components/RestartLevel';
import Scoreboard from './components/Scoreboard';
import RestartGame from './components/RestartGame';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [level, setLevel] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [currentCards, setCurrentCards] = useState([]);

  async function getData() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', {mode: 'cors'});
    const cardData = await response.json();
    setData(cardData.data);
  }

  const getRandomInteger = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getNewCurrentCards = (number) => {
    number = Math.min(number, data.length);
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
    setIsLoading(false);
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
  };

  const handleClick = (e) => {
    let index = e.target.dataset.index;
    if (currentCards[index].clicked) {
      setAlreadyClicked(true);
    } else {
      let newLevelScore = levelScore + 1;
      currentCards[index].clicked = true;
      setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
      setLevelScore((prevLevelScore) => prevLevelScore + 1);
      if (newLevelScore === (4 + ((level - 1) * 2))) {
        setIsLoading(true);
        setLevel((prevLevel) => prevLevel + 1);
        setLevelScore(0);
      } else {
        let newShuffledCards = shuffleCurrentCards(currentCards);
        setCurrentCards(newShuffledCards);
      }
    }
  };

  const handleRestartLevel = () => {
    setCurrentScore(currentScore - levelScore);
    setLevelScore(0);
    setAlreadyClicked(false);
  };

  const handleRestartGame = () => {
    setCurrentScore(0);
    setLevelScore(0);
    setLevel(1);
    setAlreadyClicked(false);
  };
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      let newCards = getNewCurrentCards(4 + ((level - 1) * 2))
      setCurrentCards(newCards);
    }
  }, [data, level, alreadyClicked]);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p>Get points by clicking on an image, but don't click on any more than once!</p>
        <RestartLevel 
          handleRestartLevel={handleRestartLevel}
        />
        <RestartGame 
          handleRestartGame={handleRestartGame}
        />
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
          isLoading={isLoading}
          alreadyClicked={alreadyClicked}
        />
      </main>
    </div>
  );
}

export default App;
