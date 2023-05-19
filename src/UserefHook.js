import React, { useEffect, useRef, useState } from "react";

export default function UserefHook() {
  let [name, setName] = useState("");
  let counter = useRef(0);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <div>
      <hr />
      <h1 className="name"> userRefHook</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p> the name is :{name}</p>

      <p>the current value is :{counter.current}</p>
    </div>
  );
}
