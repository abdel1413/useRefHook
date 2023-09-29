import { forwardRef, useEffect, useRef, useState } from "react";

let OwnComponent = forwardRef((props, ref) => {
  let [name, setName] = useState("");
  let counter = useRef(null);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <div>
      <p>{counter.current}</p>
      <input
        type="text"
        placeholder="Enter your name"
        ref={ref}
        {...props}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
});

function ParentComponent() {
  let ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <hr />
      <h3>UseRef and forwardRef</h3>
      <OwnComponent ref={ref} style={{ color: "green" }} />
      <button onClick={handleClick}>Click</button>

      <hr />
    </div>
  );
}
export default ParentComponent;

// const MyComponent = forwardRef((props, ref) => {
//   console.log("props ", props.color);
//   return (
//     <div>
//       <input {...props} ref={ref} />
//     </div>
//   );
// });

// function ParentComponent() {
//   let inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <hr />
//       <p>
//         {" "}
//         useRef and forwardRef to allow parent component to have access to
//         different component
//       </p>
//       <MyComponent ref={inputRef} color="yellow" />

//       <button onClick={handleClick}>click to focus</button>
//     </div>
//   );
// }
// export default ParentComponent;
