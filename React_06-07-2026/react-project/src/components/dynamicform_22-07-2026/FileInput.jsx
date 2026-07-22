import { useState } from "react";

function FileInput(){

const [file,setFile]=useState(null);

return(

<div>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<h3>

{file && file.name}

</h3>

</div>

)

}

export default FileInput;