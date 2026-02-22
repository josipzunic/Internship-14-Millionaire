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
  timer,
  setTimer,
  timeToAnswer,
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
    } else if (timer === 0) {
      setGameEnded(!gameEnded);
      setGameStarted(!gameStarted);
      setTimer(timeToAnswer);
    }
  }, [
    correctCounter,
    pointsToWin,
    setGameEnded,
    setGameStarted,
    gameEnded,
    gameStarted,
    userAnsweredWrong,
    timer,
    timeToAnswer,
    setTimer,
  ]);

  return (
    <div className={styles.mainDisplay}>
      <Sidebar correctCounter={correctCounter}></Sidebar>
      <QuestionDisplay
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
        userAnsweredWrong={userAnsweredWrong}
        setUserAnsweredWrong={setUserAnsweredWrong}
        timer={timer}
        setTimer={setTimer}
        timeToAnswer={timeToAnswer}
      ></QuestionDisplay>
    </div>
  );
};
