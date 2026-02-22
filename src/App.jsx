import { useState } from "react";
import "./App.module.css";
import { GameDisplay } from "./components/gameDisplay/gameDisplay";
import { StartGameDisplay } from "./components/startGameDisplay/startGameDisplay";
import { EndGameDisplay } from "./components/endGameDisplay/endGameDisplay";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [correctCounter, setCorrectCounter] = useState(0);
  const timeToAnswer = 120;
  const [timer, setTimer] = useState(timeToAnswer);

  return (
    <>
      {!gameStarted && !gameEnded && (
        <StartGameDisplay
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
        ></StartGameDisplay>
      )}
      {gameStarted && (
        <GameDisplay
          gameEnded={gameEnded}
          setGameEnded={setGameEnded}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          correctCounter={correctCounter}
          setCorrectCounter={setCorrectCounter}
          timer={timer}
          setTimer={setTimer}
          timeToAnswer={timeToAnswer}
        ></GameDisplay>
      )}
      {gameEnded && (
        <EndGameDisplay
          correctCounter={correctCounter}
          setCorrectCounter={setCorrectCounter}
          gameEnded={gameEnded}
          setGameEnded={setGameEnded}
        ></EndGameDisplay>
      )}
    </>
  );
}

export default App;
