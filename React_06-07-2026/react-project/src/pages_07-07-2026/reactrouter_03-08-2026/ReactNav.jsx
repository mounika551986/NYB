import { Link } from "react-router-dom";

function ReactNav() {
  return (
    <nav>
      <Link to="/ReactHome">Home</Link> |{"ReactHome "}
      <Link to="/ReactAbout">About</Link> |{"React About "}
      <Link to="/ReactContact">Contact</Link>
    </nav>
  );
}

export default ReactNav;