import { useContext } from "react";
import { Navigate,Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({children}){
     const [isAuth]=useContext(AuthContext)

     if(isAuth){
         return children;
     }

     return <Navigate to={"/"}/>
}