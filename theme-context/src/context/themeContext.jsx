import { createContext} from "react"
import {useState} from "react"

export const ThemeContext=createContext()
function ThemeContextProvider ({children}){
    const [wallpaper,setwallpaper]=useState("green");
    const toogleWallpaper=()=>{
        wallpaper==="green"?setwallpaper("red"):setwallpaper("green")
    }
    return(
        <>
        <ThemeContext.Provider value={[wallpaper,toogleWallpaper]}>
            {children}
        </ThemeContext.Provider>
        
        </>
    )
}export default ThemeContextProvider