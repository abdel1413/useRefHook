import { useRef } from "react";
import "./App.css";

export default function RefDomManup() {
  let listRef = useRef("");

  const viewNextCat = (index) => {
    console.log("current", listRef.current);
    let listNode = listRef.current.querySelectorAll("li > img")[index];
    console.log("img", listNode);
    listNode.scrollIntoView({
      bahavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <div className="container">
      <p> userRef Dom manupalation</p>
      <nav>
        <button onClick={() => viewNextCat(0)}> cate 1</button>
        <button onClick={() => viewNextCat(1)}> cate 2</button>
        <button onClick={() => viewNextCat(2)}> cate 3</button>
      </nav>
      <ul ref={listRef} className="images">
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
