import { useNavigate } from "react-router-dom";

function UseNavigate(){

const navigate=useNavigate();

return(

<button onClick={()=>navigate("/UseAbout")}>

Go To About

</button>

)

}
export default UseNavigate;
