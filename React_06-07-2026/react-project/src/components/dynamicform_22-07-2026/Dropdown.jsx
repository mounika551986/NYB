import { useState } from "react";

function Dropdown() {

const [course,setCourse]=useState("");

return(

<div>

<select
value={course}
onChange={(e)=>setCourse(e.target.value)}
>

<option value="">Select Course</option>
<option>React</option>
<option>Java</option>
<option>Python</option>

</select>

<h3>{course}</h3>

</div>

)

}

export default Dropdown;