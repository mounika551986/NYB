import WithAuth from "../reacthoc_28-07-2026/WithAuth";
import Dashboard from "./Dashboard";

const ProtectedDashboard = WithAuth(Dashboard)
function Project(){
    return(
        <>
        <ProtectedDashboard/>
        </>
    )
}
export default Project;
