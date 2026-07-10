import { useEffect, useState } from "react";
import "./StudentApi.css";

function StudentApi() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Data (GET)
  const fetchStudents = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Unable to load students");
      }

      const data = await response.json();

      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // POST
  const addStudent = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "New Student",
          email: "student@gmail.com",
        }),
      }
    );

    const data = await response.json();

    alert("Student Added");

    console.log(data);
  };

  // PUT
  const updateStudent = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name: "Updated Student",
          email: "updated@gmail.com",
        }),
      }
    );

    const data = await response.json();

    alert("Student Updated");

    console.log(data);
  };

  // DELETE
  const deleteStudent = async (id) => {
    await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );

    alert("Student Deleted");

    setStudents(students.filter((student) => student.id !== id));
  };

  // Search
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">

      <h1>Student Management API</h1>

      <button onClick={addStudent}>Add Student</button>

      <br /><br />

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.map((student) => (
        <div className="card" key={student.id}>
          <h3>{student.name}</h3>

          <p>{student.email}</p>

          <button
            onClick={() => updateStudent(student.id)}
          >
            Update
          </button>

          <button
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default StudentApi;
