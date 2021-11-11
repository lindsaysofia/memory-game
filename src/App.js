import './App.css';
import Gameboard from './components/Gamboard';
import RestartLevel from './components/RestartLevel';
import Scoreboard from './components/Scoreboard';
import RestartGame from './RestartGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p>Get points by clicking on an image, but don't click on any more than once!</p>
        <RestartLevel />
        <RestartGame />
      </header>
      <main>
        <Scoreboard />
        <Gameboard />
      </main>
    </div>
  );
}

export default App;
