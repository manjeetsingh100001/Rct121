import { ThemeContext } from "../context/themeContext";
import {useContext} from "react"
function Navbar(){
    const value=useContext(ThemeContext)
    return(
        <>
       <div> this is the  title of page {value}</div> 
        </>
    )

    
} export default Navbar;