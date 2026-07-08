function StudentCard(props) {
  return (
    <div>
      <h3>Student Details</h3>

      <p>Name : {props.name}</p>

      <p>Course : {props.course}</p>

      <hr />
    </div>
  );
}

export default StudentCard;
