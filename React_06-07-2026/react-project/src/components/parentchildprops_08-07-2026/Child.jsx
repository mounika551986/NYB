function Child(props) {
  return (
    <div>
      <h2>Parent to Child Communication</h2>

      <h3>String</h3>
      <p>Name: {props.name}</p>

      <h3>Number</h3>
      <p>Age: {props.age}</p>

      <h3>Array</h3>
      <ul>
        {props.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <h3>Object</h3>
      <p>City: {props.student.city}</p>
      <p>Course: {props.student.course}</p>
    </div>
  );
}

export default Child;