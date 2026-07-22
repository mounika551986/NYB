import { useState } from "react";

function RemoveSkill() {

  const [skills, setSkills] = useState([""]);

  function handleChange(index, value) {

    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  }

  function addSkill() {
    setSkills([...skills, ""]);
  }

  function removeSkill(index) {

    const newSkills = skills.filter((_, i) => i !== index);

    setSkills(newSkills);
  }

  return (

    <div>

      {
        skills.map((skill, index) => (

          <div key={index}>

            <input
              value={skill}
              onChange={(e)=>handleChange(index,e.target.value)}
            />

            <button onClick={()=>removeSkill(index)}>
              Remove
            </button>

          </div>

        ))
      }

      <button onClick={addSkill}>
        Add
      </button>

    </div>
  );
}

export default RemoveSkill;