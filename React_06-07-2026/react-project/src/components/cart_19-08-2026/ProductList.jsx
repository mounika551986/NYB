import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart_19-08-2026/cartSlice";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;