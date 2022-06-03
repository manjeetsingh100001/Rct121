
//  import { useContext } from "react";

import Todo from "./components/todo/todo";

// import { ReduxContext } from "./Redux/ReduxProvider";
import "./App.css";
import Counter from "./components/counter";

export default function App() {
  
  return (
    <div className="App">
   <Counter/>
      <br />
      <br />
      <Todo />
    </div>
  );
}

 
