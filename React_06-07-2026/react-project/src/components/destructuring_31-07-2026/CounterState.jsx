import { useState } from "react";

function CounterState() {

  const [count, setCount] = useState(0);
const [age, setAge] = useState(20);
const [city, setCity] = useState("Hyderabad");
  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h2>Age</h2>
      <p>Age: {age}</p>
       <button onClick={() => setAge(age + 5)}>
        Increment age
        </button>
      <p>City: {city}</p>
    </>
  );

}

export default CounterState;