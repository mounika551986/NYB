import { useNavigate } from "react-router-dom";

function MiLogin() {
  const navigate = useNavigate();

  function handleLogin() {
    alert("Login Successful");

    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default MiLogin;