import { FormContext } from "../context/formContext"
import {useContext} from "react"
import { Link } from "react-router-dom";


function FormOne(){
       const [form ,setForm]=useContext(FormContext)
    const handleChange=(e)=>{
        const{id,value}=e.target;
        setForm({
            ...form,
            [id]:value
        })
        
    }
    const handleSubmit=(e)=>{
        console.log("data",form)
        
        e.preventDefault()
           
    }
   const handleData=(e)=>{
    console.log("d",form)
   }
        return(<>
        <form onSubmit={handleSubmit} > 
        <input type="text" placeholder="name" id="username" onChange={handleChange}/>
        <input type="password" placeholder="password" id="password" onChange={handleChange} />
        {/* <input type="submit" placeholder="submit"/> */}
            
           
        <button  onClick={handleData}>
        <Link to="formtwo"> submit </Link>
        </button>
        
        </form>
        </>
         )
    } export default FormOne;