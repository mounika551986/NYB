import { useNavigate } from "react-router-dom";

function NaviLogin() {

    const navigate = useNavigate();

    const handleLogin = () => {

        alert("Login Successful");

        navigate("/NaviDashboard");

    };

    return (

        <div>

            <h2>Login Page</h2>

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );

}

export default NaviLogin;