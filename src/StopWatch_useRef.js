import React, { useRef, useState } from "react";

export default function StopWatchUseRef() {
  let [start, setStart] = useState(null);
  let [now, setNow] = useState(null);
  const [isPlaying, setIsplaying] = useState(false);
  let ref = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    //clear the interval before accessing the current state
    clearInterval(ref.current);

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(ref.current);
  };

  let secondsPassed = 0;
  if (start !== null && now !== null) {
    secondsPassed = (now - start) / 1000;
  }

  const resetTime = () => {
    if (!isPlaying) {
      setNow((now = null));
      setIsplaying(false);
    }
  };
  const playStop = () => {
    if (!isPlaying) {
      setIsplaying(true);
      setStart(Date.now());
      setNow(Date.now());
      //clearInterval(ref.current);
      ref.current = setInterval(() => {
        setNow(Date.now());
      }, 1000);
    } else {
      clearInterval(ref.current);
      setIsplaying(!isPlaying);
    }
  };

  return (
    <div className="stop-watch">
      <p> {secondsPassed.toFixed(2)}</p>

      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
      <button onClick={resetTime}>Reset</button>
      <button onClick={playStop}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
  );
}
