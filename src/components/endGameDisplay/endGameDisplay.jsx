import styles from "./endGameDisplay.module.css";
import { levels, maxReward, safeIndex } from "../../constants/levels";

export const EndGameDisplay = ({ correctCounter }) => {
  let answeredCorrectly; 

  if(correctCounter >= 5 && correctCounter < 10) answeredCorrectly = safeIndex;
  else if (correctCounter === 10) answeredCorrectly = maxReward;
  else answeredCorrectly = 0;

  return (
    <div className={styles.endDisplay}>
      <h1>GAME OVER</h1>
      <p>
        PLAYER WON:
        <span>{`${answeredCorrectly !== 0 ? levels[answeredCorrectly] : 0}`} €</span>
      </p>
    </div>
  );
};
