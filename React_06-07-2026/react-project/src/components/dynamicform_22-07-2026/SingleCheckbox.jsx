import { useState } from "react";

function SingleCheckbox(){

const [agree,setAgree]=useState(false);

return(

<div>

<input
type="checkbox"
checked={agree}
onChange={(e)=>setAgree(e.target.checked)}
/>

I Agree

<h3>{agree ? "Accepted":"Not Accepted"}</h3>

</div>

)

}

export default SingleCheckbox;