import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h3>Counter</h3>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

    </div>
  );
}

export default Counter;