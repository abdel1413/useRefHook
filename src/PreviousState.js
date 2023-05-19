import { useEffect, useRef, useState } from "react";
import UserefHook from "./UserefHook";

export default function PreviousState() {
  let [name, setName] = useState("");
  let prevValue = useRef();
  let changcolor = useRef();
  let newColor = useRef();

  useEffect(() => {
    prevValue.current = name;
  }, [name]);

  useEffect(() => {
    changcolor.current.style.color = "blue";
    changcolor.current.style.background = "yellow";
  });

  useEffect(() => {
    newColor.current.style.background = "blue";
    newColor.current.style.color = "white";
  });

  return (
    <div>
      <hr />
      <h2> Tracking previous state and style the ps with useRef</h2>

      <div style={{ display: "inline-block" }}>
        <p ref={changcolor}>this is my current name {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p ref={newColor}>my previous name was : {prevValue.current}</p>
      </div>
    </div>
  );
}
