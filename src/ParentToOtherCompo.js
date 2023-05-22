import { forwardRef, useRef } from "react";

const MyComponent = forwardRef((props, ref) => {
  console.log("props ", props.color);
  return (
    <div>
      <input {...props} ref={ref} />
    </div>
  );
});

function ParentComponent() {
  let inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <hr />
      <p>
        {" "}
        useRef and forwardRef to allow parent component to have access to
        different component
      </p>
      <MyComponent ref={inputRef} color="yellow" />

      <button onClick={handleClick}>click to focus</button>
    </div>
  );
}
export default ParentComponent;
