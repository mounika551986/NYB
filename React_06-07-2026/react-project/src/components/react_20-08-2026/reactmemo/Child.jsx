import React from "react";
function Child({name}){
    console.log("child rendered");
    return(
        <h2>Hello {name}</h2>
    )
}
export default React.memo(Child);
