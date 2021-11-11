import './App.css';
import Gameboard from './components/Gamboard';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p>Get points by clicking on an image, but don't click on any more than once!</p>
      </header>
      <main>
        <Scoreboard />
        <Gameboard />
      </main>
    </div>
  );
}

export default App;
