import styles from "./jokers.module.css";

export const Jokers = ({
  used5050,
  setUsed5050,
  handleFiftyFifty,
  usedSkip,
  setUsedSkip,
  handleSkip,
}) => {
  const use5050 = () => {
    if (!used5050) {
      setUsed5050(true);
      handleFiftyFifty();
    }
  };

  const useSkip = () => {
    if (!usedSkip) {
      setUsedSkip(true);
      handleSkip();
    }
  };

  return (
    <div>
      <button
        onClick={use5050}
        className={used5050 ? styles.inactive : styles.active}
        disabled={used5050}
      >
        50:50
      </button>
      <button
        onClick={useSkip}
        className={usedSkip ? styles.inactive : styles.active}
        disabled={usedSkip}
      >
        skip
      </button>
    </div>
  );
};
