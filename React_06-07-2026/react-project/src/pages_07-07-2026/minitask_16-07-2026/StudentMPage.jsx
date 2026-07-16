import { useReducer } from "react";
import { initialState, studentReducer } from "../redux_16-07-2026/studentReducer";
import SearchStudent from "../../components/minitask_16-07-2026/SearchStudent";
import StudentList from "../../components/minitask_16-07-2026/StudentList";
import AddStudent from "../../components/minitask_16-07-2026/AddStudent";

function StudentMPage(){
    const [state,dispatch]= useReducer(studentReducer,initialState);
    return(
        <div>
            <h1>Student Management system</h1>
            <SearchStudent/>
            <StudentList
            students={state.students}
        dispatch={dispatch}/>
            <AddStudent dispatch={dispatch}/>
        </div>
    )
}
export default StudentMPage;
