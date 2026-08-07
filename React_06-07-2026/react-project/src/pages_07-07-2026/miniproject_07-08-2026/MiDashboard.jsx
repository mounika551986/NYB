import { Link, Outlet } from "react-router-dom";

function MiDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>

      <br />
      <br />

      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default MiDashboard;