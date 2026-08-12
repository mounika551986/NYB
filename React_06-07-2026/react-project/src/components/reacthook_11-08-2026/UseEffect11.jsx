import { useEffect, useState } from "react";

function UseEffect11(){
    const [name,setName]=useState("")
useEffect(()=>{
        document.title="user page"
    },[]);
    return(
        <h2>User page</h2>
    )
}
export default UseEffect11;
