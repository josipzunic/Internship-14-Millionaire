import styles from "./answers.module.css";
import { getRandomArrayElement, removeTwoAnswers } from "../../helper/helper";
import { Timer } from "../timer/timer";
import { shuffleArray } from "../../helper/helper";
import { useState } from "react";
import { Jokers } from "../Jokers/jokers";

export const Answers = ({
  answers,
  correctCounter,
  setCorrectCounter,
  setCurrentQuestion,
  questions,
  setQuestionPool,
  answerPressed,
  setAnswerPressed,
  used5050,
  setUsed5050,
  timeToAnswer,
  setTimer,
  usedSkip,
  setUsedSkip,
  userAnsweredWrong,
  setUserAnsweredWrong,
}) => {
  const questionPrefix = ["A.", "B.", "C.", "D."];
  const [availableAnswers] = useState(() => shuffleArray(answers.answers));
  const [fiftyFiftyResult, setFiftyFiftyResult] = useState(null);
  const displayedAnswers = fiftyFiftyResult ?? availableAnswers;
  const timeUntilNextQuestion = 3;
  const [timerText, setTimerText] = useState("Time until next question");
  const [timer, setTimerNextQuestion] = useState(timeUntilNextQuestion);

  const handleFiftyFifty = () => {
    setFiftyFiftyResult(removeTwoAnswers(availableAnswers));
  };

  const handleSkip = () => {
    const updatedQuestions = questions.filter((q) => q !== answers);
    setQuestionPool(updatedQuestions);
    const newQuestion = getRandomArrayElement(updatedQuestions);
    setCorrectCounter(correctCounter + 1);
    setCurrentQuestion(newQuestion);
    setFiftyFiftyResult(null);
    setTimer(timeToAnswer);
  };

  const getChosenAnswer = (e, asnwersArray) => {
    const updatedQuestions = questions.filter((q) => q !== answers);
    setQuestionPool(updatedQuestions);
    const newQuestion = getRandomArrayElement(updatedQuestions);

    let chosenAnswer = e.target.textContent.split(" ").slice(1).join(" ");

    chosenAnswer = asnwersArray.find(
      (answer) => answer.answer === chosenAnswer,
    );
    setTimerText(chosenAnswer.isCorrect ? "Time until next question" : "Game over in");
    if (chosenAnswer.isCorrect) setCorrectCounter(correctCounter + 1);
    else
      setTimeout(() => {
        setUserAnsweredWrong(!userAnsweredWrong);
      }, timeUntilNextQuestion * 1000);

    setAnswerPressed(chosenAnswer);
    setTimeout(() => {
      setCurrentQuestion(newQuestion);
      setAnswerPressed(null);
      setFiftyFiftyResult(null);
      setTimer(timeToAnswer);
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
      <div className={styles.answersGrid}>
        {Object.values(displayedAnswers).map((answer, index) => (
          <div key={index} className={styles.answerWrapper}>
            <button
              className={`${styles.answers} ${conditionalStyle(answer)}`}
              onClick={(e) => getChosenAnswer(e, displayedAnswers)}
            >
              {`${questionPrefix[index]} ${answer.answer}`}
            </button>
          </div>
        ))}
      </div>
      <Jokers
        used5050={used5050}
        setUsed5050={setUsed5050}
        handleFiftyFifty={handleFiftyFifty}
        usedSkip={usedSkip}
        setUsedSkip={setUsedSkip}
        handleSkip={handleSkip}
      ></Jokers>
      {answerPressed && (
        <Timer
          textAccompaningTime={timerText}
          timer={timer}
          setTimer={setTimerNextQuestion}
          className={styles.timerNormal}
        ></Timer>
      )}
    </div>
  );
};
