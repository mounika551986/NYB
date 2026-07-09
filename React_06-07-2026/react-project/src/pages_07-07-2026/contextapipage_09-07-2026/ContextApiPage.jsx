import Navbar from "../../components/contextapi_09-07-2026/Navbar.jsx";
import Profile from "../../components/contextapi_09-07-2026/Profile.jsx/index.js";
import UserProvider from "../../components/contextapi_09-07-2026/UserContext.jsx/index.js";

function ContextApiPage() {
return(
    <UserProvider>
        <Navbar/>
        <Profile/>
    </UserProvider>
)
}
export default ContextApiPage;
