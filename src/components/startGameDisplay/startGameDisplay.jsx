import styles from "./startGameDisplay.module.css";

export const StartGameDisplay = ({ gameStarted, setGameStarted }) => {
  const startGame = () => {
    setGameStarted(!gameStarted);
  };

  return (
    <>
      <section className={styles.startDisplay}>
        <div className={styles.grid}>
          <div className={styles.gridOne}>
            <h1>HRT</h1>
            <p>TELETEKST</p>
          </div>
          <div className={styles.gridTwo}>IZDVAJAMO 14</div>
          <div className={styles.gridThree}>
            Internship-1-GIT..........................1 <br />
            Internship-2-C-Sharp......................2
            <br />
            Internship-3-OOP..........................3
            <br />
            Internship-4-OOP2.........................4
            <br />
            Internship-5-FestivalDB...................5
            <br />
            Internship-7-Moodle.......................6
            <br />
            Internship-8-HTML-CSS.....................7
            <br />
            Internship-9-CSS-1........................8
            <br />
            Internship-10-CSS-2.......................9
            <br />
            Internship-11-JS1........................10
            <br />
            Internship-12-JS2........................11
            <br />
            Internship-12-RPS-game...................12
            <br />
            Internship-13-Task-Managment.............13
            <br />
            Internship-14-Millionaire................14
            <br />
          </div>
          <div className={styles.gridFour}>
            PROGNOZA: SLIJEDE RELATIVNO JEDNOSTAVNA PITANJA IZ FIZIKE :)
          </div>
        </div>
        <div className={styles.startGame}>
          <h2><span>00:00</span>WHO WANTS TO BE A MILLIONAIRE (14)</h2>
          <button onClick={startGame}> &gt;START GAME&lt; </button>
        </div>
        <div className={styles.footer}>
            <ul>
                <li>HRVATSKA</li>
                <li>SVIJET</li>
                <li>PROGRAM</li>
                <li>SPORT</li>
            </ul>
        </div>
      </section>
    </>
  );
};
