import { Question } from "../Questions/questions";
import { Answers } from "../Answers/answers";
import { questions } from "../../constants/questions";
import styles from "./questionDisplay.module.css";
import { useState } from "react";
import { getRandomArrayElement } from "../../helper/helper";
import { Timer } from "../timer/timer";

export const QuestionDisplay = ({ correctCounter, setCorrectCounter }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    getRandomArrayElement(questions),
  );
  const [answerPressed, setAnswerPressed] = useState(null);
  const timeToAnswer = 30;
  const textAccompaningTime = "Time left to answer:";

  return (
    <div className={styles.questionDisplay}>
      <Question question={currentQuestion.question}></Question>
      <Answers
        answers={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
        questions={questions}
        answerPressed={answerPressed}
        setAnswerPressed={setAnswerPressed}
      ></Answers>
      {!answerPressed && (
        <Timer
          time={timeToAnswer}
          textAccompaningTime={textAccompaningTime}
        ></Timer>
      )}
    </div>
  );
};
