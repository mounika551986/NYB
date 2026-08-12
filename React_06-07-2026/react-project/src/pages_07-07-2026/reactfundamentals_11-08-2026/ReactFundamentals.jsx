import { useState } from "react";
import Header from "../../components/reactfundamentals_11-08-2026/Header";
import ProductList from "../../components/reactfundamentals_11-08-2026/ProductList";

function ReactFundamentals() {
  const [showProducts, setShowProducts] = useState(true);

  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 }
  ];

  return (
    <div>
      <Header title="My Product Store" />

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts ? (
        <ProductList products={products} />
      ) : (
        <h3>Products are hidden</h3>
      )}
    </div>
  );
}

export default ReactFundamentals;