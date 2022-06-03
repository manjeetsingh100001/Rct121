
import { incrementCountAction } from "../redux/counter/action";
import { useDispatch, useSelector } from "react-redux";
function Counter(){
    const count = useSelector((state) => {
        // console.log(state);
        return state.counter.count;
      });
      const dispatch = useDispatch();
    
    return(
        <>
           <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementCountAction(1))}>ADD</button>
      <button onClick={() => dispatch(incrementCountAction(-1))}>REDUCE</button>
      <br />
        
        </>
    )

}export default Counter