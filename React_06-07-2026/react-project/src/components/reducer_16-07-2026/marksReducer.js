export const initialState = {
  marks: 35,
};

export function marksReducer(state, action) {
  switch (action.type) {
    case "addMarks":
      return {
        marks: state.marks + 5,
      };

    case "removeMarks":
      return {
        marks: state.marks - 5,
      };

    case "resetMarks":
      return {
        marks: 36,
      };

    default:
      return state;
  }
}
