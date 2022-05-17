import { React } from "react";
import styles from "./Card.module.css";

function Card(props){
   const {email,name}=props
    return(
<div className={styles.mn}>
<div className={styles.left}>
    <img src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6222481c0ad8761618b18e7e_profile-picture.jpg" alt="profile" style={{width:"100%",height:"100%",borderRadius:"50%" }}></img>
</div>
<div className={styles.right} handleClick>
    <p style={{textAlign:"left"}}>{email}</p>
    
    <p style={{textAlign:"left"}}>{name}</p>
</div>
</div>

    )
}
export default Card