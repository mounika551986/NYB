import { useState } from "react";

function MultipleCheckbox(){

const [skills,setSkills]=useState([]);

function handleSkill(e){

const {value,checked}=e.target;

if(checked){

setSkills([...skills,value]);

}else{

setSkills(skills.filter(skill=>skill!==value));

}

}

return(

<div>

<input
type="checkbox"
value="React"
onChange={handleSkill}
/>

React

<input
type="checkbox"
value="Java"
onChange={handleSkill}
/>

Java

<input
type="checkbox"
value="Python"
onChange={handleSkill}
/>

Python

<h3>{skills.join(", ")}</h3>

</div>

)

}

export default MultipleCheckbox;