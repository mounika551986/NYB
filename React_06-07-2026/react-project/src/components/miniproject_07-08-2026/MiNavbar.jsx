import { Link } from "react-router-dom";

function MiNavbar() {
    
  return (
    
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#282c34",
      }}
    >
        
      <Link to="/BrHome" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/UseAbout" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>

      <Link to="/employees" style={{ color: "white", textDecoration: "none" }}>
        Employees
      </Link>

      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
        Dashboard
      </Link>

      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
        Login
      </Link>
    </nav>
  );
}

export default MiNavbar;