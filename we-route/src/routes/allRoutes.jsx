import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import UserPage from "../components/userPage";


function Allroutes(){
    return(
        <>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/users" element={<UserPage/>}/>

         

        </Routes>
        
        </>
    )
} export default Allroutes