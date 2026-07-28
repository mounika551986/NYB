import Dashboard from "./Dashboard";
import WithAuth from "./WithAuth";

const EnhancedDashboard=WithAuth(Dashboard)
function AuthDashboard(){
    return<EnhancedDashboard/>
    
}
export default AuthDashboard;
