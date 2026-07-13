import { useContext } from "react";
import UserContext from "../../pages_07-07-2026/authenticationpage_13-07-2026/UserContext";

function Login(){
    const{user}=useContext(UserContext)
    return(
         <>
      {user.isLoggedIn ? (
        <h1>Welcome {user.name}</h1>
      ) : (
        <h2>Please Login</h2>
      )}
    </>
    )
}
export default Login;
