import { useState } from "react";
import Child from "./Child";

function ChildReact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child name="Mounika" />
    </>
  );
}

export default ChildReact;