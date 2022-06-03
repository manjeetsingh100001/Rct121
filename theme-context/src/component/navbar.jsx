import { ThemeContext } from "../context/themeContext";
import {useContext} from "react"
function Navbar(){
    const [value,setValue]=useContext(ThemeContext)
    console.log(setValue)
    return(
        <>
       <div> this is the  title of page {value}</div> 
        </>
    )

    
} export default Navbar;