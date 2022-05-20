import React from "react"
import Card from "./Card.jsx";
function CardList(){
    var list=[
        { id:1,
          name:"manjeet singh",
          email:"abc@gmail.com",
          mobile:999865624
          
        }, {
          id:2,
          name:"ranjeet singh",
          email:"abc@gmail.com",
          mobile:9086987999
        }, {
          id:3,
          name:"simranjeet singh",
          email:"abc@gmail.com",
          mobile:93333656530
        },
        {
          id:4,
          name:"jagjeet singh",
          email:"abc@gmail.com",
          mobile:9086688624
        }, {
          id:5,
          name:"harjeet singh",
          email:"abc@gmail.com",
          mobile:9999565324
        }
      ]
    return(
        <div>
            {
                list.map((data)=> <Card name={data.name} email={data.email} handleClick={()=> alert(data.mobile)}/>)
            }
        {/* <Card name="manjeet" email="manjeetnandal200@gmail.com" handleClick={()=> alert(" 9643459088  ")}/>
        <Card name="simran" email="simranPagal@gmailcom"/>
        <Card name="manjeet ji" email="manjeetji200@gmail.com"/>
        <Card name=" wah manjeet wah" email="manjeetwah200@gmail.com"/> */}
        </div>
    )
}
export default CardList