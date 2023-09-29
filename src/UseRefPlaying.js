import { useEffect, useRef, useState } from "react";
import UserefHook from "./UserefHook";

// function UseRefPlaying() {
//   let [isPlaying, setIsplay] = useState(false);
//   let ref = useRef(null);

//   const handleClick = () => {
//     setIsplay(!isPlaying);
//     if (!isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//     // !isPlaying ? ref.current.play() : ref.current.pause();
//   };

//   return (
//     <div>
//       <hr />
//       <h3>UseRef to Play/pause video</h3>
//       <video
//         controls
//         ref={ref}
//         onPlay={() => setIsplay(true)}
//         onPause={() => setIsplay(false)}
//         width="400"
//         className="source"
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//       <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
//       <hr />
//     </div>
//   );
// }
// export default UseRefPlaying;

function RefPlayer() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    !playing ? ref.current.play() : ref.current.pause();
  };

  return (
    <>
      <video
        className="source"
        ref={ref}
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={handleClick}>{playing ? "Pause" : "Play"}</button>
    </>
  );
}

export default RefPlayer;
