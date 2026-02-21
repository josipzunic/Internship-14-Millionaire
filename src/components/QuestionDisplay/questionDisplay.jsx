import { Question } from "../Questions/questions";
import { Answers } from "../Answers/answers";
import { questions } from "../../constants/questions";
import styles from "./questionDisplay.module.css"

export const QuestionDisplay = () => { 

  return (
    <div className={styles.questionDisplay} >
      <Question question={questions[0].question}></Question>
      <Answers answers={questions[0]}></Answers>
    </div>
  );
};
