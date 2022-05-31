 import React from "react"
import {useState,useRef,useEffect} from "react"

 function Stopwatch(){
    const [count,setCount]=useState(0);
    const countRef=useRef(null);
   
    useEffect(()=>{
        start()
    },[])
      const start=()=>{
         countRef.current=setInterval( ()=>{
            // console.log(count)
            //  setCount(count+1)
            setCount((prev) => prev+1)
         },1000);
     };
     const pause=()=>{
         clearInterval(countRef.current)
     };
     const stop=()=>{
         clearInterval(countRef.current);
         setCount(0)
     }
 console.log(countRef.current,count)
return(
    <div>
     
    <div>stopwatch</div>
    <h2> Count is {count} Sec</h2>
     <button onClick={()=>{start()}}>start</button>
     <button onClick={()=>{stop()}}>reset</button>
     <button onClick={()=>{pause()}}>pause</button>
    </div>
)
 }
 export {Stopwatch};