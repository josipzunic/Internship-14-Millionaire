import { useState } from "react";
import styles from "./App.module.css";
import { QuestionDisplay } from "./components/QuestionDisplay/questionDisplay";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  const [correctCounter, setCorrectCounter] = useState(0);

  return (
    <div className={styles.mainDisplay}>
      <Sidebar correctCounter={correctCounter}></Sidebar>
      <QuestionDisplay
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
      ></QuestionDisplay>
    </div>
  );
}

export default App;
