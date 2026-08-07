import { Outlet } from "react-router-dom";
import MiNavbar from "./MiNavbar";
import MiFooter from "./MiFooter";

function MiLayout(){
    return(
        <>
        <MiNavbar/>
         <div style={{ padding: "20px" }}>
            <Outlet/>
         </div>
         <MiFooter/>
        </>
    )
}
export default MiLayout;
