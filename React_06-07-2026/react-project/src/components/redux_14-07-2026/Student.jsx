import { useDispatch, useSelector } from "react-redux";

import {
  addStudent,
  removeStudent,
} from "../../features/student_14-07-2026/StudentSlice";

function Student() {
  const students = useSelector((state) => state.student.students);

  const dispatch = useDispatch();

  const addNewStudent = () => {
    dispatch(
      addStudent({
        id: Date.now(),
        name: "Myra",
        city:"hyderabad",
        course: "React",
      })
    );
  };

  return (
    <div>
      <h2>Student Management</h2>

      <button onClick={addNewStudent}>
        Add Student
      </button>

      <hr />

      {students.map((student) => (
        <div key={student.id}>
          <h4>{student.name}</h4>
<p>{student.city}</p>
          <p>{student.course}</p>

          <button
            onClick={() => dispatch(removeStudent(student.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Student;