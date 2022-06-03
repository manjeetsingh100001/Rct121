import { FormContext } from "../context/formContext"
import {useContext} from "react"
import { Link } from "react-router-dom";
function FormTwo(){
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

    return(<>
    <form onSubmit={handleSubmit} > 
    <input type="number" placeholder="Mobile number" id="mobile" onChange={handleChange}/>
    <input type="text" placeholder="Address" id="address" onChange={handleChange} />
    <button >
        <Link to="/dashboard"> submit </Link>
        </button>
    </form>
    </>
     )
} export default FormTwo