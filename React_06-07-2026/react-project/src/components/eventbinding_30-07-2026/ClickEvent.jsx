import { useState } from "react";

function ClickEvent(){
    const [count,setCount]=useState(0);
    return(
        <>
        <h1>Click event Example</h1>
        <h2>{count}</h2>
        <button
        onClick={()=>setCount(count+1)}>
            Increment
        </button>
        </>
    )
}
export default ClickEvent;
