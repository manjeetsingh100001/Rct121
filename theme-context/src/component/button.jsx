 import { ThemeContext } from "../context/themeContext";
  import {useContext} from "react"
function Button(){
    const [color,colorFunc]=useContext(ThemeContext)
    console.log(color,colorFunc)
    return(
        <>
<button style={{"backgroundColor":`${color}`}}>theme is {color}</button>
<div style={{"backgroundColor":`${color}`,"height":"300px"}} >
    
</div>
<button onClick={colorFunc}>Toogle wallpaper</button>
        </>
    )
}export default Button;