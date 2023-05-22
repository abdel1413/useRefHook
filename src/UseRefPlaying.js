import { useEffect, useRef, useState } from "react";
import UserefHook from "./UserefHook";

function UseRefPlaying() {
  let [isPlaying, setIsplay] = useState(false);
  let ref = useRef(null);

  const handleClick = () => {
    setIsplay(!isPlaying);
    // isPlaying ? ref.current.play() : ref.current.pause();
    if (!isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <div>
      <hr />
      <h3>UseRef to Play/pause video</h3>
      <video
        controls
        ref={ref}
        onPlay={() => setIsplay(true)}
        onPause={() => setIsplay(false)}
        width="400"
        className="source"
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <hr />
    </div>
  );
}
export default UseRefPlaying;
// export default function UseRefPlaying() {
//   let [isPlaying, setIsPlaying] = useState(false);
//   let tracker = useRef(null);

//   const playing = () => {
//     let playStatus = !isPlaying;
//     setIsPlaying(!isPlaying);

//     if (!isPlaying) {
//       tracker.current.play();
//     } else {
//       tracker.current.pause();
//     }
//   };

//   return (
//     <div>
//       <hr />
//       <h2> Using useRef to play or pause a video</h2>
//       <div>
//         <button className="play" onClick={playing}>
//           {isPlaying ? "Pause" : "Play"}
//         </button>
//         <video
//           controls
//           className="source"
//           ref={tracker}
//           onplay={() => setIsPlaying(true)}
//           onPause={() => setIsPlaying(false)}
//         >
//           <source
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//             type="video/mp4"
//           />
//         </video>
//       </div>
//     </div>
//   );
// }
