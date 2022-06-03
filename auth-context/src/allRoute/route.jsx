import {Routes,Route} from "react-router-dom"
import Navbar from "../component/navbar"
import FormOne from "../component/formOne"
import FormTwo from "../component/formTwo"
import Dashboard from "../component/dashboard"

function Allroutes(){
    return(
        <>
        <Routes>
         <Route path="/" element={<>
         <Navbar/>
         <FormOne/>
         </>}/>
         <Route path="/formtwo" element={<> 
         <Navbar/>
         <FormTwo />
         </>}/>

         <Route path="/dashboard" element={<Dashboard/>}/>
         {/* <Route path="/users" element={<UserPage/>}/> */}

         

        </Routes>
        
        </>
    )
} export default Allroutes