import styles from "./questions.module.css";

export const Question = ({ question }) => {
  return (
    <div className={styles.questionWrapper}>
      <div className={styles.question}>{question}</div>
    </div>
  );
};
