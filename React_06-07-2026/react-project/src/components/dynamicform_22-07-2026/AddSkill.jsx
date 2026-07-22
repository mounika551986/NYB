import { useState } from "react";

function AddSkill() {

  const [skills, setSkills] = useState([""]);

  function handleChange(index, value) {

    const updatedSkills = [...skills];

    updatedSkills[index] = value;

    setSkills(updatedSkills);
  }

  function addSkill() {

    setSkills([...skills, ""]);
  }

  return (
    <div>

      <h2>Dynamic Skills</h2>

      {
        skills.map((skill, index) => (

          <div key={index}>

            <input
              value={skill}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Enter Skill"
            />

          </div>

        ))
      }

      <br />

      <button onClick={addSkill}>
        Add Skill
      </button>

    </div>
  );
}

export default AddSkill;