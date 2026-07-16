import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../../features/studentslice_16-07-2026/StudentSlice";

function StudentCard({student,dispath}){
    const reduxDispatch=useDispatch();
    const  activeStudents=useSelector(
        (state) => state.student.activeStudents
  );
     const status = activeStudents.find(
    (item) => item.id === student.id
  );
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{student.name}</h3>

      <p>Course: {student.course}</p>

      <p>Age: {student.age}</p>

      <p>
        Status: {status?.active ? "Active" : "Inactive"}
      </p>
<button
        onClick={() =>
          dispatch({
            type: "DELETE_STUDENT",
            payload: student.id,
          })
        }
      >
        Delete
      </button>
      <button
        onClick={() =>
            reduxDispatch(toggleStatus({id:student.id}))
        }
        >

        </button>
        </div>
  )
}
export default StudentCard;
