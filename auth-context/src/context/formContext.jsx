
import {createContext} from "react"
import {useState} from "react"
export const FormContext=createContext();

function FormContextProvider({children}){
        const [form,formState]=useState(
            {
             "username":"",
             "password":"",
             "mobile":"",
             "address":"",   
            }
        )
    return(
        <>
        <FormContext.Provider value={[form,formState]}>
           {children}
        </FormContext.Provider>
        
        </>
    )

}
export default FormContextProvider;