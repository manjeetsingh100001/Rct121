import React from "react"
import styles from "./Restaurant.module.css"
function Restaurant(props){
    return(
    
        <div className={styles.container}>
            <div>
             <img src={props.url} alt="foodImage"  style={{width:"120px", height:"150px",borderRadius:"25%",margin:"5%" }}></img>
            </div> 
            <div className={styles.mid}>
                <h1>{props.name}</h1>
                <p>{props.category}</p>
                <p>cost {props.cost_for_one} for one</p>
                <h5>min rs {props.cost_for_two}</h5>
                <h3>{props.payment}</h3>
             </div>
             <div className={styles.left}>
                 <h1 style={{background:"teal"}}>{props.rating}</h1>
                 <p>{props.votes} votes</p>
                 <p>{props.review} reviews</p>
             </div>
        
        </div>
    )
}
export {Restaurant}