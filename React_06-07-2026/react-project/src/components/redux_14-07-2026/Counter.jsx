import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "../../features/counter_14-07-2026/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
