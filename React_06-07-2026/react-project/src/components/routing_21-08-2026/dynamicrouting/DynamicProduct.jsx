import { Link } from "react-router-dom";

function DynamicProduct() {
  return (
    <div>
      <h2>Products</h2>

      <Link to="/ProductDetail/101">Laptop</Link>
      <br />
      <br></br>

      <Link to="/ProductDetail/102">Mobile</Link>
      <br />
<br></br>
      <Link to="/productDetail/103">Headphones</Link>
    </div>
  );
}
export default DynamicProduct;
