import { useEffect, useRef, useState } from "react";
import UserefHook from "./UserefHook";

export default function PreviousState() {
  let [name, setName] = useState("");
  let prevValue = useRef();
  let currentName = useRef();
  let prevName = useRef();

  useEffect(() => {
    prevValue.current = name;
  }, [name]);

  useEffect(() => {
    currentName.current.style.color = "blue";
    currentName.current.style.background = "yellow";
  });

  useEffect(() => {
    prevName.current.style.background = "blue";
    prevName.current.style.color = "white";
  });

  return (
    <div>
      <hr />
      <h2> Tracking previous state and style the p tags with useRef</h2>

      <div style={{ display: "inline-block" }}>
        <p ref={currentName}>this is my current name {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p ref={prevName}>my previous name was : {prevValue.current}</p>
      </div>
    </div>
  );
}
