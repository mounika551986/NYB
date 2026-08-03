import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link> |
      <Link to="/products">Products</Link> |
      <Link to="/cart">Cart</Link>
    </>
  );
}

export default Navbar;