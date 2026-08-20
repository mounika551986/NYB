import { useState } from "react";

function SkillsForm() {
  const [skills, setSkills] = useState([""]);
  

  const handleChange = (index, value) => {
    const updatedSkills = [...skills];

    updatedSkills[index] = value;

    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter(
      (_, i) => i !== index
    );

    setSkills(updatedSkills);
  };

  return (
    <div>
      <h2>Dynamic Forms</h2>

      {skills.map((skill, index) => (
        <div key={index}>
          <input
            value={skill}
            onChange={(e) =>
              handleChange(index, e.target.value)
            }
            placeholder={`Skill ${index + 1}`}
          />

          <button onClick={() => removeSkill(index)}>
            Remove
          </button>
        </div>
      ))}

      <button onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}

export default SkillsForm;