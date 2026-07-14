import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter_14-07-2026/CounterSlice";
import studentReducer from "../../features/student_14-07-2026/StudentSlice";


const store = configureStore({
  reducer: {
    counter: counterReducer,
        student: studentReducer,

  },
});

export default store;

