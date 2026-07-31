import useCounter from "../../pages_07-07-2026/miniproject_31-07-2026/usecounter";

function Counter(){

    const {count, increment} = useCounter();

    return(
        <>
        <h2>{count}</h2>

        <button onClick={increment}>
        Increment
        </button>
        </>
    )
}

export default Counter;
