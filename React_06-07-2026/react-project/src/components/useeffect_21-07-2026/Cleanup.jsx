import { useState, useEffect } from "react";

function Cleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect:", count);

    return () => {
      console.log("Cleanup:", count);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Cleanup;