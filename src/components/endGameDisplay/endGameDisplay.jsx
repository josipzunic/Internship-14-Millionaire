import styles from "./endGameDisplay.module.css";
import { levels, maxReward, safeIndex } from "../../constants/levels";

export const EndGameDisplay = ({
  correctCounter,
  setCorrectCounter,
  gameEnded,
  setGameEnded,
}) => {
  let answeredCorrectly;
  if (correctCounter >= 5 && correctCounter < 10) answeredCorrectly = safeIndex;
  else if (correctCounter === 10) answeredCorrectly = maxReward;
  else answeredCorrectly = 0;

  const amountEarned = answeredCorrectly !== 0 ? levels[answeredCorrectly] : 0;

  const playAgain = () => {
    setGameEnded(!gameEnded);
    setCorrectCounter(0);
  };

  return (
    <div className={styles.endDisplay}>
      <h1 className={styles.gameOver}>GAME OVER</h1>
      <p className={styles.message}>
        {amountEarned > 0
          ? "Congrats! You win:"
          : "Better luck next time :("}
      </p>
      <p className={styles.amountEarned}>{amountEarned} €</p>
      <button onClick={playAgain} className={styles.playAgain}>
        &gt; PLAY AGAIN &lt;
      </button>
    </div>
  );
};
