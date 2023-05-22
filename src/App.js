import "./App.css";
import InputFocus from "./InputFocus";
import ParentComponent from "./ParentToOtherCompo";
import PreviousState from "./PreviousState";
import RefDomManup from "./RefDomManup";
import UserefHook from "./UserefHook";
import UseRefPlaying from "./UseRefPlaying";

function App() {
  return (
    <div className="App">
      <h2>This is where my work will pass our useref hook</h2>
      <UserefHook />

      <InputFocus />
      <RefDomManup />
      <UseRefPlaying />
      <PreviousState />
      <ParentComponent />
    </div>
  );
}

export default App;
