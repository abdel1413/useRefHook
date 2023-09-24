import "./App.css";
import InputFocus from "./InputFocus";
import ParentComponent from "./ParentToOtherCompo";
import PreviousState from "./PreviousState";
import RefDomManup from "./RefDomManup";

import ScrollImage from "./ScrollImage";
import StopWatchUseRef from "./StopWatch_useRef";
import { UseRducerFunction } from "./useReducer/UseReducerFuncton";
import UserefHook from "./UserefHook";
import UseRefPlaying from "./UseRefPlaying";

function App() {
  return (
    <div className="App">
      <h2>This is where my work will pass our useref hook</h2>
      <UserefHook />
      <InputFocus />
      <RefDomManup />

      <ScrollImage />
      <UseRefPlaying />

      <PreviousState />
      <ParentComponent />
      <StopWatchUseRef />
      <UseRducerFunction />
    </div>
  );
}

export default App;
