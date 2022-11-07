import { useCallback, useEffect, useRef, useState } from 'react';

interface UseClockParams {
  from: number;
  to?: number;
  ms?: number;
  down?: boolean;
  stopOnFinish?: boolean;
}
export const useClock = ({
  from,
  to,
  ms = 1000,
  down = false,
  stopOnFinish = false,
}: UseClockParams): [
  number,
  () => void,
  () => void,
  (from?: number) => void,
  boolean
] => {
  const [counter, setCounter] = useState(from);
  const [isRunning, setIsRunning] = useState(false);

  const intervalId = useRef<any>();
  const start: () => void = () => {
    setIsRunning(!(to !== undefined && counter === to));
  };
  const pause: () => void = () => setIsRunning(false);
  const reset: (resetFrom?: number) => void = useCallback(
    (resetFrom?: number) => {
      clearInterval(intervalId.current);
      setCounter(resetFrom ? resetFrom : from);
    },
    [from]
  );

  useEffect(() => {
    intervalId.current = setInterval(() => {
      isRunning && setCounter(down ? counter - 1 : counter + 1);
      if (
        to !== undefined &&
        (down ? counter <= to + 1 : counter >= to - 1) &&
        stopOnFinish
      ) {
        pause();
      }
    }, ms);
    return () => clearInterval(intervalId.current);
  }, [isRunning, counter, ms, down, to, reset, stopOnFinish]);

  return [counter, start, pause, reset, isRunning];
};

export default useClock;
