import { useMemo, useState } from "react";

function UsememoParent(){
    const[count,setCount]=useState(0);
    const[number, setNumber]=useState(10);
    const expensiveCalculation = useMemo(()=>{
        console.log("calculation running...");
        let result =0;
        for(let i=0; i<=100000 ;i++);{
result +=number;
        }
return result;
    },[number]);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=> setCount(count+1)}>
                Increment
            </button>
            <h2> Number:{setNumber} </h2>
            <button onClick ={()=> setNumber(number+5)} >
                Change number
            </button>
<p>Result: {expensiveCalculation}</p>
        </div>
    )
}
export default UsememoParent;
