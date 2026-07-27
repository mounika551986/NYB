import UseCounter from "./UseCounter";

function Counter() {
    const { count, increment } = UseCounter();
    return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}
export default Counter;
