import React from "react";

function Product({ product, onAdd }) {
  console.log("Product rendered:", product.name);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default React.memo(Product);