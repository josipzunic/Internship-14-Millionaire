import styles from "./answers.module.css";
import { getRandomArrayElement } from "../../helper/helper";
import { Timer } from "../timer/timer";
import { shuffleArray } from "../../helper/helper";
import { useState } from "react";

export const Answers = ({
  answers,
  correctCounter,
  setCorrectCounter,
  setCurrentQuestion,
  questions,
  answerPressed,
  setAnswerPressed,
}) => {
  const questionPrefix = ["A.", "B.", "C.", "D."];
  const [availableAnswers] = useState(() => shuffleArray(answers.answers));
  const timeUntilNextQuestion = 3;
  const textAccompaningTime = "Time until next question";
  const [timer, setTimer] = useState(timeUntilNextQuestion);

  const getChosenAnswer = (e) => {
    const currentIndex = questions.indexOf(answers);
    questions.splice(currentIndex, 1);

    let chosenAnswer = e.target.textContent.split(" ").slice(1).join(" ");
    const newQuestion = getRandomArrayElement(questions);

    chosenAnswer = availableAnswers.find(
      (answer) => answer.answer === chosenAnswer,
    );
    if (chosenAnswer.isCorrect) setCorrectCounter(correctCounter + 1);

    setAnswerPressed(chosenAnswer);
    setTimeout(() => {
      setCurrentQuestion(newQuestion);
      setAnswerPressed(null);
    }, timeUntilNextQuestion * 1000);
  };

  const conditionalStyle = (answer) => {
    if (answerPressed === null) return "";
    if (answer.isCorrect) return styles.correct;
    if (answerPressed === answer) return styles.incorrect;
    return "";
  };

  return (
    <div className={styles.questionLayout}>
      {Object.values(availableAnswers).map((answer, index) => (
        <button
          key={index}
          className={`${styles.answers} ${conditionalStyle(answer)}`}
          onClick={getChosenAnswer}
        >
          {`${questionPrefix[index]} ${answer.answer}`}
        </button>
      ))}
      {answerPressed && (
        <Timer
          textAccompaningTime={textAccompaningTime}
          timer={timer}
          setTimer={setTimer}
          className={styles.timerNormal}
        ></Timer>
      )}
    </div>
  );
};
