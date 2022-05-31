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
       {/* state and set State=() name and callback

         //setCount(count+1)
         //setCount(count+2)
         //setCount(count+3)
         //setCount(count+4)
         //setCount(count+5)
          // if i do batch of setcount then only  last setcount will update the state ..,,bcz state follow batch operation ,it will only update for the last  setcount.

         // for all other value it will get reset
         // if we want count to increase in batch operation then,we ve to update using prev value Or using callback method, ok
         //setCount((prev)=>prev+1)
         //=>>>two ways to update setCount(count+1),and second using callback.we use calback method when we want it update using prev 
         like in set interval(bcz it is declare in window obj it  create a global scope) ,when obj updation doesnt work,*/}

{/*         
         //=>useEffect is used for ntk request for all async task ,it is async in nature but dont return promise..../>used for subscription  and other side effects
        
         //it takes two thing callback and dependency array.It is a lifecycle hook, get update at every  lifecycle changes
         there are three lifecycle phase from which every component goes throw-->mounting phase,updating phase ,unmounting phase.
         //if u dont give dependency array useEffect will get executed  every time there is change in lifecycle of component.
         
         //so stop that behaviour  we give empty array [] or logic inside useffect  is depend on something then we will give that component  in array.[count],,so any change
          in that component will triger useEffect.
          // multiple useEffect follow top to down approach.

          //clean up function 
          this get run every time we update ui ,then update happen,it also get run when component get unmounted .
          in use effect when u return a function  it is called clean up function it run every time before u load the components.
          //it is very important bcz  when u unmount the component ,,if u dont clean up (fo ex timer) it keep on running in the background that cause memory leaks.

          //useref
          useref is a object so when u console.log it holds value like (current:1)
          when u dont want to update ui then use useref,it dont lose the value,if u want to update ui then use state.
          when u update the value using state then ,component goes through updation phase,then ref value also get displayed on ui, so state updation cause useref to be
          render on ui. */}

         </div> 

)    
 }
 export {CleanComponent}