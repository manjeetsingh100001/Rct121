import {React} from "react"
import { useState } from "react"

function Counter (){

let [Count,setCount] = useState(0);
const handleClick=()=>setCount(Count=Count+1)
console.log(Count)
return(
<div>

<h3> counter Value:{Count}</h3>
<button onClick={()=>handleClick}>Increment</button>
</div>
)
}
export {Counter}