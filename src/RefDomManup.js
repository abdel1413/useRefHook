import { useRef } from "react";
import "./App.css";

function RefDomManup() {
  let ref = useRef(null);

  let vewCat = (index) => {
    let img = ref.current.querySelectorAll("li>img")[index];

    img.scrollIntoView({
      bahavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className="container">
      <button onClick={() => vewCat(0)}>Cat 1</button>
      <button onClick={() => vewCat(1)}>Cat 2</button>
      <button onClick={() => vewCat(2)}>Cat 3</button>
      <h3> UseRef to scroll images into view</h3>
      <ul ref={ref} className="images">
        <li>
          <img src="https://placekitten.com/g/200/200" alt="image1" />
        </li>
        <li>
          <img src="https://placekitten.com/g/300/200" alt="image2" />
        </li>
        <li>
          <img src="https://placekitten.com/g/250/200" alt="image3" />
        </li>
      </ul>
    </div>
  );
}
export default RefDomManup;
