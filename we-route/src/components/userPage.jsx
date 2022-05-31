import axios from "axios"
import { useEffect,useState} from "react"
import {Link} from "react-router-dom"
function UserPage(){
const [loading,setLoading]=useEffect(true);
const [data,setData]=useEffect(null);
useEffect(()=>{
    setLoading(true);
    
    axios({
        url:"https://reqres.in/api/users",
        method:"GET"
    
    })
    .then((res)=>{
        setLoading(false);
        setData(res.data)
    })
    .catch((err)=>{
        setLoading(false);
    });


},[])

console.log(data)
    return(
        <>
<h1> All Users</h1>
        
        
        </>
    )
}export default UserPage;