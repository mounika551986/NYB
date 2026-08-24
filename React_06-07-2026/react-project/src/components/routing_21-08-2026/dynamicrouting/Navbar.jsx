import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <h1>Navigation using Links</h1>
        <Link to ="./Hello">Home</Link>
        <br></br>
        <br></br>
        <Link to ="/hELLO">Contact</Link>
        <br></br>
        <br></br>
        <Link to ="/">Profile</Link>
        </>
    )
}
export default Navbar;
