import { useRef } from "react";
import "./App.css";

function RefDomManup() {
  let ref = useRef(null);

  let vewCat = (index) => {
    let img = ref.current.querySelectorAll("li>img")[index];
    console.log("img", img);
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

// export default function RefDomManup() {
//   let listRef = useRef("");

//   const viewNextCat = (index) => {
//     console.log("current", listRef.current);
//     let listNode = listRef.current.querySelectorAll("li > img")[index];
//     console.log("img", listNode);
//     listNode.scrollIntoView({
//       bahavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   };
//   return (
//     <div className="container">
//       <p> userRef Dom manupalation</p>
//       <nav>
//         <button onClick={() => viewNextCat(0)}> cate 1</button>
//         <button onClick={() => viewNextCat(1)}> cate 2</button>
//         <button onClick={() => viewNextCat(2)}> cate 3</button>
//       </nav>
//       <ul ref={listRef} className="images">
//         <li>
//           <img src="https://placekitten.com/g/200/200" alt="image1" />
//         </li>
//         <li>
//           <img src="https://placekitten.com/g/300/200" alt="image2" />
//         </li>
//         <li>
//           <img src="https://placekitten.com/g/250/200" alt="image3" />
//         </li>
//       </ul>
//     </div>
//   );
// }
