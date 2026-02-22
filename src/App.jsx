import { useState } from "react";
import { GameDisplay } from "./components/gameDisplay/gameDisplay";
import { StartGameDisplay } from "./components/startGameDisplay/startGameDisplay";
import { EndGameDisplay } from "./components/endGameDisplay/endGameDisplay";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

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
        ></GameDisplay>
      )}
      {gameEnded && <EndGameDisplay></EndGameDisplay>}
    </>
  );
}

export default App;
