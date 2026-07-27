import AdminPanel from "../../components/hoc_23-07-2026/AdminPanel";
import Dashboard from "../../components/hoc_23-07-2026/Dashboard";
import Profile from "../../components/hoc_23-07-2026/Profile";
import withAuth from "./WithAuth";
import withAuthorization from "./WithAuthorization";
import withLoading from "./WithLoading";

const EnhancedDashboard= withAuth(
    withAuthorization(
        withLoading(Dashboard)
    )
);
function Hoc(){
    return(
        <div>
            <h1>Higher order component(HOC) </h1>
            <EnhancedDashboard loading ={false}/>
            <AdminPanel/>
            <Profile/>
        </div>
        
        
    )
}
export default Hoc;
