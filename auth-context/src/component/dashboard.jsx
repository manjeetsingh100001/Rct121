import { FormContext } from "../context/formContext"
import {useContext} from "react"

function Dashboard(){
    const [form]=useContext(FormContext)
    return(
        <>
        <div style={{"height":"380px","backgroundColor":"grey"}}>

       <h1> user name is:{form.username}</h1>
       <h1> mobile number is:{form.mobile}</h1>
       <h1> address  is:{form.address}</h1>
            </div>

        </>
    )
} export default Dashboard