import { useState } from "react";
import Header from "../../components/minitask_08-07-2026/Header";
import StudentCard from "../../components/minitask_08-07-2026/StudentCard";
import Counter from "../../components/minitask_08-07-2026/Counter";
import ChildSender from "../../components/minitask_08-07-2026/ChildSender";
import ChildReceiver from "../../components/minitask_08-07-2026/ChildReceiver";

function MiniTaskPage(){
    const [message, setmessage]=useState("React project")
    const receiveMessage=data=>{
        setmessage(data)
    }
    const students=[
        {
        id: 1,
        name:'Nirvi',
        course:"React"
        },
        {
            id:2,
            name:"Rahul",
            Course:"java"
        }
    ];
    return
    <div>
    <Header/>

{

        students.map((student) => (
<StudentCard
key={student.id}

            name={student.name}

            course={student.course}

          />
        ))
    }
        <Counter/>
        <ChildSender getMessage={receiveMessage} />
        <ChildReceiver message={message} />
        </div>

};

