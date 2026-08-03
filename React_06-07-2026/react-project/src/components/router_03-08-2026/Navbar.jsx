import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <h1>Navigation using Links</h1>
        <Link to ="/">Home</Link>
        <br></br>
        <br></br>
        <Link to ="/">Contact</Link>
        <br></br>
        <br></br>
        <Link to ="/">About</Link>
        </>
    )
}
export default Navbar;
