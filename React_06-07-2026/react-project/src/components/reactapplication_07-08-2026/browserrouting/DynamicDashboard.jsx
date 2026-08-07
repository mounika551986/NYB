import { Outlet } from "react-router-dom";
import BrProfile from "./BrProfile";

function DynamicDashboard(){

return(

<>
<h1>Dashboard</h1>
<BrProfile/>
<Outlet/>

</>

)

}
export default DynamicDashboard;
