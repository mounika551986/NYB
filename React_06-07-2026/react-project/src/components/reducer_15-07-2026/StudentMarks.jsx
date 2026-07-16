import { useReducer } from "react";
import { initialState, marksReducer } from "./marksReducer";

function StudentMarks() {
  const [state, dispatch] = useReducer(
    marksReducer,
    initialState
  );

  return (
    <div>
      <h1>Student Marks</h1>

      <h2>Marks : {state.marks}</h2>

      <button onClick={() => dispatch({ type: "addMarks" })}>
        Add 5 Marks
      </button>

      <button onClick={() => dispatch({ type: "removeMarks" })}>
        Remove 5 Marks
      </button>

      <button onClick={() => dispatch({ type: "resetMarks" })}>
        Reset
      </button>
    </div>
  );
}

export default StudentMarks;
