import styles from "./startGameDisplay.module.css";

export const StartGameDisplay = ({ gameStarted, setGameStarted }) => {
  const startGame = () => {
    setGameStarted(!gameStarted);
  };

  return (
    <div className={styles.startGame}>
      <h1>WHO WANTS TO BE A MILLIONAIRE</h1>
      <button onClick={startGame}>START GAME</button>
    </div>
  );
};
