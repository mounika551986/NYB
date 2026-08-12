import { useState } from "react";

function UseState11() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br></br>
      <button onClick={()=> setCount(count-1)}>
        decrement
      </button>
    </div>
  );
}

export default UseState11;