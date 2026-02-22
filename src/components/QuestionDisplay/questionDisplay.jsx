import { Question } from "../Questions/questions";
import { Answers } from "../Answers/answers";
import { questions } from "../../constants/questions";
import styles from "./questionDisplay.module.css";
import { useState } from "react";
import { getRandomArrayElement } from "../../helper/helper";
import { Timer } from "../timer/timer";
import timerStyles from "../timer/timer.module.css";

export const QuestionDisplay = ({
  correctCounter,
  setCorrectCounter,
  userAnsweredWrong,
  setUserAnsweredWrong,
  timer,
  setTimer,
  timeToAnswer,
}) => {
  const [questionPool, setQuestionPool] = useState([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState(
    getRandomArrayElement(questionPool),
  );
  const [answerPressed, setAnswerPressed] = useState(null);
  const timeWarning = 10;
  const textAccompaningTime = "Time left to answer:";
  let noTimeLeft = false;
  const [used5050, setUsed5050] = useState(false);
  const [usedSkip, setUsedSkip] = useState(false);

  if (timer <= timeWarning) noTimeLeft = true;
  if (timer === 0) noTimeLeft = false;

  return (
    <div className={styles.questionDisplay}>
      <Question question={currentQuestion.question}></Question>
      <Answers
        key={`question-${currentQuestion.id}`}
        answers={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
        questions={questionPool}
        setQuestionPool={setQuestionPool}
        answerPressed={answerPressed}
        setAnswerPressed={setAnswerPressed}
        used5050={used5050}
        setUsed5050={setUsed5050}
        timeToAnswer={timeToAnswer}
        setTimer={setTimer}
        usedSkip={usedSkip}
        setUsedSkip={setUsedSkip}
        userAnsweredWrong={userAnsweredWrong}
        setUserAnsweredWrong={setUserAnsweredWrong}
      ></Answers>
      {!answerPressed && (
        <Timer
          key={`timer-${currentQuestion.id}`}
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
