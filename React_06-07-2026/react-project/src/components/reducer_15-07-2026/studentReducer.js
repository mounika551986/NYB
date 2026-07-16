export const initialState = {
  name: "Myra",
  age: 23,
  course: "React",
  marks: 80,
};

export function studentReducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: "Anjali",
      };

    case "increaseAge":
      return {
        ...state,
        age: state.age + 1,
      };

    case "increaseMarks":
      return {
        ...state,
        marks: state.marks + 5,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}