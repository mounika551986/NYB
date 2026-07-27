import { useState } from "react";
import Child from "./Child";


function Parent() {
  const [count, setCount] =useState(0);
    console.log("Parent Render");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child name = "mounika"/>
      
    </>
  );
}

export default Parent;
