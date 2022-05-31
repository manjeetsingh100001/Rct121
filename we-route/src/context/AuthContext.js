import {createContext} from "react"
export const AuthContext=createContext();
function AuthContextProvider({children}){
return(
    <>
    {/* //value props; when value change all desendent got rerender */}
    <AuthContext.Provider value="">
        {children}
        </AuthContext.Provider>
        
    </>
)
}export default AuthContextProvider