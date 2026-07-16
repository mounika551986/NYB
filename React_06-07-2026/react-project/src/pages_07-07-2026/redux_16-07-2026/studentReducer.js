export const initialState={
    students:[
        {
            id:1,
            name:"Rahul",
            course:"React",
            age:22
        }
    ]
}

export const studentReducer=(state,action)=>{

    switch(action.type){

        case "ADD_STUDENT":
            return{
                ...state,
                students:[...state.students,action.payload]
            }

        case "DELETE_STUDENT":
            return{
                ...state,
                students:state.students.filter(
                    student=>student.id!==action.payload
                )
            }

        default:
            return state;
    }

}