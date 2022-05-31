
import React from "react";
import {Restaurant} from "./Restaurant";
import {useEffect,useState} from "react";
function RestaurantList(){
    const [list,setList]=useState([])
    const [rate,setRating]=useState(0)
    const [page,setPage]=useState(1)
    const [cSort,setSort]=useState("")
    useEffect(
        ()=> fetchData(rate,page,cSort)
            // console.log(data)
        ,[rate,page,cSort])
        const fetchData=(rate,page,cSort)=>{
            fetch(`http://localhost:8080/food?rating_gte=${rate}&rating_ne=${rate}&_sort=rating&_order=${cSort}&_page=${page}&_limit=5`)
            .then((res)=>res.json())
            .then((data)=>setList(data))
            
        }
        // const above4=()=>{}
     const ratingSort=(val)=>{
         setRating(val)
         setPage(1)
     }
     const costSort=(val)=>{
         setSort(val)
         setPage(1)
     }

    // console.log(cSort)
    return(
    <div>
        
       <ul>
            <div style={{margin:"auto",width:"500px"}}>
                <h1>Restaurant Details</h1>
                <h3>page-{page}</h3>
           <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
           <button onClick={()=>setPage(page+1)}>Next</button>
            <br/>
            {/* <PaginationComponent page={page} currentPage={page} lastPage={4} onPageChange={setPage(page+1)}/> */}
            <br/>
           <button onClick={()=>ratingSort(4)}>rating 4 above</button>
           <button onClick={()=>ratingSort(3)}>rating 3 above</button>
           <button onClick={()=>ratingSort(2)}>rating 2 above</button>
           <button onClick={()=>ratingSort(1)}>rating 1 above</button>
           <br/>
           <br/>
           <button onClick={()=>costSort("asc")}>low to high</button>
           <button onClick={()=>costSort("desc")}>high to low</button>
           </div>
           {list.map((d)=><li key={d._id} style={{listStyleType:"none"}}>
               <Restaurant  review={d.reviews} name={d.name} url={d.image} category={d.cuisine} rating={d.rating} votes={d.votes}
                  cost_for_one={d.cost}  cost_for_two={d.minPrice} payment={d.paymentMethods}    /></li>)}
            
        </ul>
    </div>
    )
}
export {RestaurantList}