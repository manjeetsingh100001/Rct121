import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCountAction } from "./Redux/action";
// import { ReduxContext } from "./Redux/ReduxProvider";
import "./App.css";

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementCountAction(1))}>ADD</button>
      <button onClick={() => dispatch(incrementCountAction(-1))}>REDUCE</button>
    </div>
  );
}
