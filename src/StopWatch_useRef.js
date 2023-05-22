import React, { useRef, useState } from "react";

export default function StopWatchUseRef() {
  let [start, setStart] = useState(null);
  let [now, setNow] = useState(null);
  let [reset, setReset] = useState(0);
  let timeInterval = useRef(null);

  const handleStart = () => {
    setStart(Date.now());

    setNow(Date.now());

    //clear the interval before accessing the current state
    clearInterval(timeInterval.current);

    timeInterval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timeInterval.current);
  };

  let secondsPassed = 0;
  if (start !== null && now !== null) {
    secondsPassed = (now - start) / 1000;
  }

  const resetTime = () => {
    console.log(now);
    setNow((now = null));
  };

  return (
    <div className="stop-watch">
      <p>Time passed: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}
