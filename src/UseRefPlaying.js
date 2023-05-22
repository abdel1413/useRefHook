import { useEffect, useRef, useState } from "react";
import UserefHook from "./UserefHook";

export default function UseRefPlaying() {
  let [isPlaying, setIsPlaying] = useState(false);
  let playVideo = useRef(null);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      playVideo.current.play();
    } else {
      playVideo.current.pause();
    }
  };

  return (
    <div>
      <hr />
      <h2>Video player</h2>
      <video
        className="source"
        width="500"
        controls
        ref={playVideo}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      </video>
      <button className="play" onClick={handleClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

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
