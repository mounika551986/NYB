
import Navbar_12 from "../../components/contextapi_12-08-2026/Navbar_12";
import Profile_12 from "../../components/contextapi_12-08-2026/Profile_12";
import { UserProvider } from "../../components/contextapi_12-08-2026/UserContext_12";


function ContextPage_12(){
    return(
        <>
        <UserProvider>
            <Navbar_12/>
        <Profile_12/>
        </UserProvider>
        
        </>
    )
}
export default ContextPage_12;
