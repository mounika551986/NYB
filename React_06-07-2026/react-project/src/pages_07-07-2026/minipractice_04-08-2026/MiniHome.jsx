import { Link } from "react-router-dom";

function MiniHome() {
  return (
    <div>

      <h1>Home Page</h1>

      <Link to="/about">About</Link>

      <br /><br />

      <Link to="/products">Products</Link>

      <br /><br />

      <Link to="/dashboard">Dashboard</Link>

      <br /><br />

      <Link to="/login">Login</Link>

    </div>
  );
}

export default MiniHome;