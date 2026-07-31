import { useState } from "react";

function ChangeEvent(){
    const [name,setname,email]=useState("");
    return(
        <>
        <h2>Change event example</h2>
        <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setname(e.targetvalue)} />
        <br></br>
        <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e)=>setname(e.targetvalue)} />

    </>
        
    )
}
export default ChangeEvent;
