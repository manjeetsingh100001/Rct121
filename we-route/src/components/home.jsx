import { Link } from "react-router-dom"


function Home(){
    return(
        <>
        <h1> React router dom</h1>
        <Link to="/About">about link</Link>
        <Link to="/users">All Users</Link>
        </>
    )
} export default Home