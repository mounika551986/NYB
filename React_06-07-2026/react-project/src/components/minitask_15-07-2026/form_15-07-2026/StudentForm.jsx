import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

function StudentForm(){
    const [state,dispatch] =useReducer(formReducer,initialState);
      return (
    <div>
      <h1>Student Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter City"
        value={state.city}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "city",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <hr />

      <h3>Name : {state.name}</h3>
      <h3>Email : {state.email}</h3>
      <h3>City : {state.city}</h3>
    </div>
  );
}

export default StudentForm;
