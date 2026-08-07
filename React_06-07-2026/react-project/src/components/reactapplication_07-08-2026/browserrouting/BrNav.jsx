import { Link } from "react-router-dom";

function BrNav(){
    return(
        <>
        <h1>Navigation using Links</h1>
        <Link to ="/BrHome">Home</Link>
        <br></br>
        <br></br>
        <Link to ="/BrContact">Contact</Link>
        <br></br>
        <br></br>
        <Link to ="/BrProfile">Profile</Link>
        </>
    )
}
export default BrNav;
