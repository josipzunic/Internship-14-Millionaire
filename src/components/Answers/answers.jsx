import { useState } from "react";
import styles from "./answers.module.css";

export const Answers = ({ answers, correctCounter, setCorrectCounter }) => {
  const questionPrefix = ["A.", "B.", "C.", "D."];
  const availableAnswers = answers.answers;
  const [answerPressed, setAnswerPressed] = useState(null);

  const getChosenAnswer = (e) => {
    let chosenAnswer = e.target.textContent.split(" ").slice(1).join(" ");

    chosenAnswer = availableAnswers.find(
      (answer) => answer.answer === chosenAnswer,
    );
    if (chosenAnswer.isCorrect) setCorrectCounter(correctCounter + 1);
    
    setAnswerPressed(chosenAnswer);
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
    </div>
  );
};
