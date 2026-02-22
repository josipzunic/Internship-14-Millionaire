import { Question } from "../Questions/questions";
import { Answers } from "../Answers/answers";
import { questions } from "../../constants/questions";
import styles from "./questionDisplay.module.css";
import { useState } from "react";
import { getRandomArrayElement } from "../../helper/helper";
import { Timer } from "../timer/timer";
import timerStyles from "../timer/timer.module.css";

export const QuestionDisplay = ({ correctCounter, setCorrectCounter }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    getRandomArrayElement(questions),
  );
  const [answerPressed, setAnswerPressed] = useState(null);
  const timeToAnswer = 20;
  const timeWarning = 10;
  const textAccompaningTime = "Time left to answer:";
  const [timer, setTimer] = useState(timeToAnswer);
  let noTimeLeft = false;
  const [used5050, setUsed5050] = useState(false);

  if (timer <= timeWarning) noTimeLeft = true;
  if (timer === 0) noTimeLeft = false;

  return (
    <div className={styles.questionDisplay}>
      <Question question={currentQuestion.question}></Question>
      <Answers
        key={currentQuestion.question}
        answers={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
        questions={questions}
        answerPressed={answerPressed}
        setAnswerPressed={setAnswerPressed}
        used5050={used5050}
        setUsed5050={setUsed5050}
        timeToAnswer={timeToAnswer}
        setTimer={setTimer}
      ></Answers>
      {!answerPressed && (
        <Timer
          key={currentQuestion.question}
          textAccompaningTime={textAccompaningTime}
          timer={timer}
          setTimer={setTimer}
          className={
            noTimeLeft
              ? `${timerStyles.timer} ${timerStyles.timerTimeWarning}`
              : timerStyles.timerNormal
          }
        ></Timer>
      )}
    </div>
  );
};
