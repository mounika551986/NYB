import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <h2>Products</h2>

      <Link to="/products/101">iPhone</Link>

      <br />

      <Link to="/products/102">Laptop</Link>
    </>
  );
}

export default Product;