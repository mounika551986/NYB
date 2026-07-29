import { useMemo, useState } from "react";

function WithuseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function expensiveCalculation(num) {
    console.log("Calculating...");
    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total + num;
  }

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default WithuseMemo;