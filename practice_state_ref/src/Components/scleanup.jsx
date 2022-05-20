 import React, { useState } from "react";
 import { useEffect } from "react";

 function CleanComponent(){
const [user,setUser]=useState("manjeet");
const [text,setText]=useState("")
const [count,setCount]=useState(0);
const [display,setDisplay]=useState(false);

//console.log(count,"above")
useEffect(()=>{
    console.log("use Effect is working")
},[])
  const handleSubmit=()=>{
    setUser(text)
      }
 const changing=(e)=>{
     console.log(e.target.value)
     setText(e.target.value)
 }
 const handleInc=()=>{
     setCount(count+1);
 }
 const handleDec=()=>{
     setCount(count-1);
 }
 const handleScore=(val)=>{
if(val===1){
    setCount(count+1);
}else{
    setCount(count-1)
}
 }
// console.log(count,"below")
 
 return(
    
         <div>
         <h1>current user is :- {user}</h1>
         <input type="text"  onChange={(e)=>changing(e)} ></input>
         <button onClick={()=>handleSubmit()}> submit your Name</button>
         <h1>Increase the count {count}</h1>
         <button onClick={()=>handleInc()}>Inc Count</button>
         <button onClick={()=>handleDec()}>Dec Count</button>

         {display?<h1>Score of the match is- {count}</h1>:<h1>Get subscription to view Score</h1>}

         <button onClick={()=>handleScore(1)}>Inc Count</button>
         <button onClick={()=>handleScore(-1)}>Dec Count</button>
            <>
            </>
            <div></div>
         <button onClick={()=>setDisplay(!display)}>Toogle</button> 
         
         </div>

)    
 }
 export {CleanComponent}