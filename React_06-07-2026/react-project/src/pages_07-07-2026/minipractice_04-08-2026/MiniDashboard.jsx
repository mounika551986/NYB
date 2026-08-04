import { Link, Outlet, useNavigate } from "react-router-dom";

function MiniDashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

  };

  return (

    <div>

      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>

      {" | "}

      <Link to="settings">Settings</Link>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>

      <hr />

      <Outlet />

    </div>

  );
}

export default MiniDashboard;