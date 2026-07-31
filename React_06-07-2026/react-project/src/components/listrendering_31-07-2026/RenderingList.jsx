const students = [
  {id:1,name:"John",marks:90},
  {id:2,name:"Sara",marks:30},
  {id:3,name:"David",marks:80}
];
function RenderingList(){

return(

<>
{
students.map(student=>(
student.marks>=35?

<p key={student.id}>
{student.name}
</p>

:null
))
}
</>

)

}

export default RenderingList;