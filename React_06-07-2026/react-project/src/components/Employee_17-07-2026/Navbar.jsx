import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1976d2",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Employee Management</h2>

      <div>
        <Link
          to="/"
          style={{ color: "white", marginRight: "20px" }}
        >
          Home
        </Link>

        <Link
          to="/add"
          style={{ color: "white" }}
        >
          Add Employee
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
