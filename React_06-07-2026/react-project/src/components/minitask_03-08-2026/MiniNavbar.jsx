import { Link } from "react-router-dom";
import "./index.css";

function MiniNavbar() {
    return (
        <nav className= "MiniNavbar">
            <div style={{ fontSize: "24px", fontWeight: "bold"}}>Mini Navbar</div>

            <br></br>

            <Link to ="/MiniHome">Home</Link>
            <br></br>
<hr></hr>
            <Link to ="/MiniAbout">About</Link>
            <br></br>
            <br></br>
            <hr></hr>
            
            <br></br>
            <Link to ="/Services">Services</Link>
            <br></br>
            <hr></hr>

            <Link to ="/Contact">Contact</Link>
            <hr></hr>
            </nav>
    )
}
export default MiniNavbar;
