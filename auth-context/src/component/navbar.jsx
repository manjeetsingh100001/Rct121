import { AuthContext } from "../context/authContext"
import {useContext} from "react"
function Navbar(){
    const [auth,isauth]=useContext(AuthContext)
    return(
        <>
        <div style={{"height":"80px","backgroundColor":"grey"}}>
<button onClick={isauth}>{auth?"log out":"Sign in"}</button>
<button>Sign up</button>
{auth?<h2>Your are Logged in</h2>:<h2>Login First </h2>}
            </div>
        </>
    )
} export default Navbar