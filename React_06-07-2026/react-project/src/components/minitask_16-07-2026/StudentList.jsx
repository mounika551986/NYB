import { useContext } from "react";
import { StudentContext } from "../../context_16-07-2026/StudentContext";
import StudentCard from "./StudentCard";

function StudentList({ students, dispatch }) {
    const{search} =useContext(StudentContext);
    const filteredStudents= students.filter((student)=>
        student.name.toLowerCase().includes(search.toLowerCase())
);
return (
    <div>
      <h2>Student List</h2>

      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        filteredStudents.map((student) => (
            <StudentCard
             key={student.id}
            student={student}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;
