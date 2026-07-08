import { useNavigate } from "react-router-dom";

function Home() {
const navigate =useNavigate();
    return (
        <div >
            <h2>Welcome to Home Page</h2>
            <p className={`location.pathname==="/" `} onClick={()=>navigate("/props")}> Learning React Components</p>
        </div>
    );
}

export default Home;