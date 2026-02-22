import styles from "./gameDisplay.module.css";
import { useState, useEffect } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { QuestionDisplay } from "../QuestionDisplay/questionDisplay";

export const GameDisplay = ({
  gameEnded,
  setGameEnded,
  gameStarted,
  setGameStarted,
}) => {
  const [correctCounter, setCorrectCounter] = useState(0);
  const pointsToWin = 10;

  useEffect(() => {
    if (correctCounter === pointsToWin) {
      setGameEnded(!gameEnded);
      setGameStarted(!gameStarted);
    }
  }, [
    correctCounter,
    pointsToWin,
    setGameEnded,
    setGameStarted,
    gameEnded,
    gameStarted,
  ]);

  return (
    <div className={styles.mainDisplay}>
      <Sidebar correctCounter={correctCounter}></Sidebar>
      <QuestionDisplay
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
      ></QuestionDisplay>
    </div>
  );
};
