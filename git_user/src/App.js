import { useState } from "react";
import Github from "./Components/Github";
import Timer from "./Components/Timer";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
       <Github /> 
      {/* {show && <Timer />} */}
      <br />
      <br />
      <br />
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}