import { useEffect } from "react";

export const Timer = ({ textAccompaningTime, timer, setTimer, className }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimer]);

  return (
    <div className={className}>
      {textAccompaningTime} {timer}
    </div>
  );
};
