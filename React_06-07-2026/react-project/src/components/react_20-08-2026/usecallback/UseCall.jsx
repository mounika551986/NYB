import { useCallback, useState } from "react";
import Child from "./Child";

function UseCall() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default UseCall;