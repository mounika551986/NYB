import { Link } from "react-router-dom";

function MiniProduct() {

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Watch" }
  ];

  return (
    <div>

      <h1>Products</h1>

      {
        products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </div>
        ))
      }

    </div>
  );
}

export default MiniProduct;