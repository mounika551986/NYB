import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({

    name:"student",

    initialState:{
        activeStudents:[]
    },

    reducers:{

        toggleStatus:(state,action)=>{

            const student=state.activeStudents.find(
                s=>s.id===action.payload.id
            );

            if(student){

                student.active=!student.active;

            }else{

                state.activeStudents.push({
                    id:action.payload.id,
                    active:true
                });

            }

        }

    }

})

export const {toggleStatus}=studentSlice.actions;

export default studentSlice.reducer;