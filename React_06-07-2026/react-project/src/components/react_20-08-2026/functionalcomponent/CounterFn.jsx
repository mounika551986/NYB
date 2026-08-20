import { useState } from "react";

function CounterFn(){
    const[count,setCount]=useState(0);
    return(
        <>
        <h1>Functional component</h1>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
        
        </>
    )
}
export default CounterFn;
