import { useNavigate } from "react-router-dom";

function NaviRegister() {

    const navigate = useNavigate();

    const handleSubmit = () => {

        alert("Registration Successful");

        navigate("/login");

    };

    return (

        <button onClick={handleSubmit}>
            Register
        </button>

    );

}

export default NaviRegister;