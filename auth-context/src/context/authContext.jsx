import {createContext} from "react"
import {useState} from "react"
 export const AuthContext=createContext();

function AuthContextProvider({children}){
    const [auth,setAuth]=useState(false)
     const toggleAuth=()=>{
          setAuth(!auth)
      }
  return(
      <>
     <AuthContext.Provider value={[auth,toggleAuth]}>
         
         {children}
         </AuthContext.Provider> 
      
      
      </>
  )
}export default AuthContextProvider;