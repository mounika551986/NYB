import React from "react";

function Child({handleclick}){
    console.log("child rendered");
    return(
        <button onClick={()=>{handleclick}}>
            click child
        </button>
    )
}
export default React.memo(Child);
