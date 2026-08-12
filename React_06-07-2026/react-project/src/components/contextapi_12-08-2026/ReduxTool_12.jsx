import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset
} from "../../features/counterslice_12-08-2026/CounterSlice_12";

function ReduxTool_12() {
  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>

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

export default ReduxTool_12;
