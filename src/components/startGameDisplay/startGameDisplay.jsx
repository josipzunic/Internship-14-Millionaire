import styles from "./startGameDisplay.module.css";

export const StartGameDisplay = ({ gameStarted, setGameStarted }) => {
  const startGame = () => {
    setGameStarted(!gameStarted);
  };

  return (
    <div className={styles.startGame}>
      <button onClick={startGame}>
        START GAME
      </button>
    </div>
  );
};
