import { useNavigate } from "react-router-dom";

function NaviHome(){
    const Navigate=useNavigate();
     return (

        <div>

            <h1>Home Page</h1>

            <button onClick={() => Navigate("/NaviAbout")}>
                Go to About
            
            </button>

        </div>

    );

}
export default NaviHome;
