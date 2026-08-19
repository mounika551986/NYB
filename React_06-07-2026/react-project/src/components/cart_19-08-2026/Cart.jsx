import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cart_19-08-2026/cartSlice"
import { createContext } from "react";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>

              <p>
                ₹{item.price} × {item.quantity}
              </p>

              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
              >
                -
              </button>

              <span> {item.quantity} </span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

