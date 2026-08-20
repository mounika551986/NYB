import { useCallback, useState } from "react";
import ProductList from "./ProductList";

function MiniReact() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000
    }
  ];

  const handleAdd = useCallback((product) => {
    console.log("Added:", product.name);
  }, []);

  return (
    <div className="container">

      <h1>React Performance Demo</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ProductList
        products={products}
        search={search}
        onAdd={handleAdd}
      />

    </div>
  );
}

export default MiniReact;