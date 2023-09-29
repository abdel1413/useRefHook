import { useRef, useState } from "react";

export default function InputFocus() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(` The updated name is : ${name}`);
    inputRef.current.focus();
    setName("");
  };
  return (
    <div>
      <hr />
      <h3>Click to focus</h3>
      <input
        ref={inputRef}
        value={name}
        type="text"
        placeholder="enter a name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>click</button>
      <hr />
    </div>
  );
}
