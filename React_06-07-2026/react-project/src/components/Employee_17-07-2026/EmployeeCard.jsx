function EmployeeCard({ employee }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
      }}
    >
      <h2>{employee.name}</h2>

      <p>Email : {employee.email}</p>

      <p>Phone : {employee.phone}</p>

      <p>Department : {employee.department}</p>
    </div>
  );
}

export default EmployeeCard;
