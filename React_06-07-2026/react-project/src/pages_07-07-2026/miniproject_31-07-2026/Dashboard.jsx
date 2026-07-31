import { useMemo, useState } from "react";

function Dashboard(){

    const [count,setCount]=useState(0);

    const expensiveCalculation=useMemo(()=>{

        console.log("Calculating...");

        return count*1000;

    },[count]);

    return(
        <>
        <h2>{expensiveCalculation}</h2>

        <button
        onClick={()=>setCount(count+1)}>
        Increase
        </button>
        </>
    );
}

export default Dashboard;
