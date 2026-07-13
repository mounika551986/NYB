import Login from "../../components/authentication_13-07-2026/login";
import UserContext from "./UserContext";

function LoginPage(){
    const user = {
    name: "Mounika",
    isLoggedIn: true
  };
   return (
    <UserContext.Provider value={{user}}>
        <Login/>
    </UserContext.Provider>
   )
}
export default LoginPage;
