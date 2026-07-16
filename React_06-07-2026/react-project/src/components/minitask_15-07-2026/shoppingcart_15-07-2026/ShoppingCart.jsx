import { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Items : {state.items}</h2>
      <h2>Total : ₹{state.total}</h2>

      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>
        Add Item
      </button>

      <button onClick={() => dispatch({ type: "REMOVE_ITEM" })}>
        Remove Item
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}

export default ShoppingCart;
