import Home from "../../components/globalstate_13-07-2026/Home";
import UserContext from "./UserContext";


function GlobalStatePage(){
    const user="mounika";
    return(
        <>
        <UserContext.Provider value={{user}}>
            <Home/>
        </UserContext.Provider>
        
        </>
    )
}
export default GlobalStatePage;
