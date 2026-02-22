import styles from "./gameDisplay.module.css";
import { useState, useEffect } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { QuestionDisplay } from "../QuestionDisplay/questionDisplay";

export const GameDisplay = ({
  gameEnded,
  setGameEnded,
  gameStarted,
  setGameStarted,
  correctCounter,
  setCorrectCounter,
}) => {
  const [userAnsweredWrong, setUserAnsweredWrong] = useState(false);
  const pointsToWin = 10;

  useEffect(() => {
    if (correctCounter === pointsToWin) {
      setGameEnded(!gameEnded);
      setGameStarted(!gameStarted);
    } else if (userAnsweredWrong) {
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
    userAnsweredWrong,
  ]);

  return (
    <div className={styles.mainDisplay}>
      <Sidebar correctCounter={correctCounter}></Sidebar>
      <QuestionDisplay
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
        userAnsweredWrong={userAnsweredWrong}
        setUserAnsweredWrong={setUserAnsweredWrong}
      ></QuestionDisplay>
    </div>
  );
};
