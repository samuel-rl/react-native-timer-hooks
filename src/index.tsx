import { useEffect, useRef, useState } from 'react';

export const useClock: (
  total: number,
  ms?: number,
  down?: boolean
) => [number, () => void, () => void, (from?: number) => void, boolean] = (
  total: number,
  ms: number = 1000,
  down: boolean = false
) => {
  const [counter, setCounter] = useState(total);
  const [isRunning, setIsRunning] = useState(false);

  const intervalId = useRef<any>();
  const start: () => void = () => setIsRunning(true);
  const pause: () => void = () => setIsRunning(false);
  const reset: (from?: number) => void = (from?: number) => {
    clearInterval(intervalId.current);
    setCounter(from ? from : total);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      isRunning && setCounter(down ? counter - 1 : counter + 1);
    }, ms);
    // Clear interval when unmount
    return () => clearInterval(intervalId.current);
  }, [isRunning, counter, ms, down]);

  return [counter, start, pause, reset, isRunning];
};
