import { useReducer } from "react";
import { studentReducer, initialState } from "./studentReducer";

function Student() {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <div>
      <h1>Student Details</h1>

      <h3>Name : {state.name}</h3>
      <h3>Age : {state.age}</h3>
      <h3>Course : {state.course}</h3>
      <h3>Marks : {state.marks}</h3>

      <button onClick={() => dispatch({ type: "changeName" })}>
        Change Name
      </button>

      <button onClick={() => dispatch({ type: "increaseAge" })}>
        Increase Age
      </button>

      <button onClick={() => dispatch({ type: "increaseMarks" })}>
        Increase Marks
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default Student;
