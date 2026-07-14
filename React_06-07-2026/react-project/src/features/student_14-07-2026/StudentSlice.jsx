import { createSlice } from "@reduxjs/toolkit";

const initialState={
    students:[],
};
const StudentSlice=createSlice({
    name: "student",
    city:"hyderabad",
      initialState,

  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, removeStudent } = StudentSlice.actions;

export default StudentSlice.reducer;