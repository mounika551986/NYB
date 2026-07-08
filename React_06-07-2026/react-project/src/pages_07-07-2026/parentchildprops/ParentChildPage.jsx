import Child from "../../components/parentchildprops_08-07-2026/Child";

function ParentChildPage() {
    const subjects=["React","JavaScript","HTML","CSS"];
    const student={city:"Hyderabad",course:"React"};
    return(
        <>
        <Child name="Myra" age={20} subjects={subjects} student={student}/>
        <hr />

      <Child
        name="Rahul"
        age={35}
        subjects={["Java", "Spring Boot"]}
        student={{ city: "Bangalore", course: "Java Full Stack" }}
      />
        </>
    );
}
export default ParentChildPage;