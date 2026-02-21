import styles from "./App.module.css";
import { QuestionDisplay } from "./components/QuestionDisplay/questionDisplay";

function App() {
  return (
    <div className={styles.mainDisplay}>
      <QuestionDisplay></QuestionDisplay>
    </div>
  );
}

export default App;
