import { useMemo } from "react";
import Product from "./Product";

function ProductList({ products, search, onAdd }) {

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div>
      <h2>Products</h2>

      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default ProductList;