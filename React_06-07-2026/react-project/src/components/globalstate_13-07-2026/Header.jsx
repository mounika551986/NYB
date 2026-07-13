import { useContext } from "react";
import UserContext from "../../pages_07-07-2026/globalstatepage_13-07-2026/UserContext";

function Header(){
    const{user}=useContext(UserContext);

return(
    <h2>Welcome {user}</h2>
);
}
export default Header;

