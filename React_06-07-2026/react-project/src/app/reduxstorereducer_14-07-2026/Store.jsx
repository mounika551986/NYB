import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter_14-07-2026/CounterSlice";
import studentReducer, { addStudent } from "../../features/student_14-07-2026/StudentSlice";
import { changeCity } from "../../features/city_16-07-2026/CitySlice";




const store = configureStore({
  reducer: {
    counter: counterReducer,
        student: studentReducer,
        city: changeCity,
        addStudent
        
  },
});

export default store;

