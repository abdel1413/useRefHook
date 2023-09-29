import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";
import "./App.css";

export default function ScrollImage() {
  let [index, setIndex] = useState();
  let ref = useRef(null);
  //get cat and push it into the empty array
  let catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: `https://placekitten.com/250/200?image=` + i,
    });
  }

  const goToNext = () => {
    //this function force react to flush any pending work
    //and update the DOM synchronously
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="image-scroller">
      <hr />
      <nav>
        <button onClick={goToNext}>Next</button>
      </nav>
      <ul className="cat-box">
        {catList.map((cat, i) => {
          return (
            <li key={cat.id} ref={index === i ? ref : null}>
              <img
                src={cat.imageUrl}
                className={index === i ? "active" : ""}
                id="active"
                alt={"cat#" + cat.id}
              />
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
}
