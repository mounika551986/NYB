import { Link } from "react-router-dom";

function NavigationFlow(){
    return(
        <>
        <h1>Navigation Flow</h1>
        <br></br>
        <Link to="/MiDashboard">Dashboard</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiHome">Home</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiAbout">About</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiDashboard">Dashboard</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiEmployees">Employees</Link>
        <br></br>
        <br></br>
<hr></hr>
        <Link to="/MiEmployeeDetails">Employee Details</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiProfile">Profile</Link>
        <br></br>
    <br></br>
    <hr></hr>
                <Link to="/MiAbout">About</Link>

        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiSettings">Settings</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiNotFound">NotFound</Link>
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/MiLogin">Login</Link>
        <hr></hr>
        </>
    )
}
export default NavigationFlow;
