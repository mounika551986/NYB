import { Link, Outlet } from "react-router-dom";

function NestedDashboard(){
    return(
        <>
        <h1>Welcome to Dashboard</h1>
        <nav>
            <Link to="/NestedProfile">Profile</Link>
            <br></br>
            <br></br>
            <Link to="/NestedReport">Report</Link>
            <br>
            </br>
            <br></br>
            <Link to="/NestedSettings">Settings</Link>
        </nav>
        <hr/>
        <Outlet/>
        </>
        
    )
}
export default NestedDashboard;
