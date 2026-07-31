function ArrayObject() {

  const students = [
    { id: 1, name: "John", marks: 90 },
    { id: 2, name: "Sara", marks: 80 },
    { id: 3, name: "David", marks: 70 }
  ];

  return (

    <div>

      <h2>Student List</h2>

      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.marks}</p>
        </div>
      ))}

    </div>

  );

}

export default ArrayObject;


