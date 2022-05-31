// or Destructiong of props
// function PaginationComponent({lastPage,currentPage,onPageChange})
function PaginationComponent(props){

    const arr=new Array(props.lastPage).fill(0)
    return(
        <div>
            arr.map((page)=> {<button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}> </button>})
        </div>
    )
}
export {PaginationComponent}