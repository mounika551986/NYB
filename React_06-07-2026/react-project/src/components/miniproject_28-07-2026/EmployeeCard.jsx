function EmployeeCard({ employee }) {
  return (
    <>
      <h3>{employee.name}</h3>
      <p>Email : {employee.email}</p>
      <p>Phone : {employee.phone}</p>
      <hr />
    </>
  );
}

export default EmployeeCard;
