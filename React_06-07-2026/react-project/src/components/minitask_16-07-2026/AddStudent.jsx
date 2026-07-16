import { useState } from "react";

function AddStudent({ dispatch }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course || !age) {
      alert("Please fill all fields");
      return;
    }

    dispatch({
      type: "ADD_STUDENT",
      payload: {
        id: Date.now(),
        name,
        course,
        age,
      },
    });

    // Clear the form
    setName("");
    setCourse("");
    setAge("");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
