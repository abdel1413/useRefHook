import { useRef, useState } from "react";

export default function InputFocus() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(` The updated name is : ${name}`);
    inputRef.current.focus();
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

// export default function InputFocus() {
//   let [name, setName] = useState("");

//   let numTime = useRef();

//   const handleClick = () => {
//     console.log(numTime.current);
//     numTime.current.style.background = "yellow";
//     numTime.current.value = "some text from value";
//     numTime.current.focus();
//   };

//   return (
//     <div>
//       <hr />
//       <h2> Clicking the button will focus the input</h2>
//       <input
//         ref={numTime}
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={handleClick}>click </button>
//     </div>
//   );
// }
