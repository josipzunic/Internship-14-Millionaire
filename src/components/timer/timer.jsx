import { useState, useEffect } from "react";

export const Timer = ({ time, textAccompaningTime }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{textAccompaningTime} {timer}</div>;
};
