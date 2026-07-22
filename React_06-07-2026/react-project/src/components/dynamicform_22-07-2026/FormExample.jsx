import { useState } from "react";

function FormExample() {

const [formData,setFormData]=useState({

name:"",
email:"",
course:"",
gender:"",
address:"",
agree:false

});

function handleChange(e){

const {name,value,type,checked}=e.target;

setFormData({

...formData,

[name]:type==="checkbox"?checked:value

});

}

function handleSubmit(e){

e.preventDefault();

console.log(formData);

}

return(

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
/>

<br/><br/>

<input
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
/>

<br/><br/>

<select
name="course"
value={formData.course}
onChange={handleChange}
>

<option value="">Select</option>
<option>React</option>
<option>Java</option>

</select>

<br/><br/>

<input
type="radio"
name="gender"
value="Male"
checked={formData.gender==="Male"}
onChange={handleChange}
/>

Male

<input
type="radio"
name="gender"
value="Female"
checked={formData.gender==="Female"}
onChange={handleChange}
/>

Female

<br/><br/>

<textarea
name="address"
value={formData.address}
onChange={handleChange}
/>

<br/><br/>

<input
type="checkbox"
name="agree"
checked={formData.agree}
onChange={handleChange}
/>

Agree

<br/><br/>

<button>

Submit

</button>

</form>

)

}

export default FormExample;