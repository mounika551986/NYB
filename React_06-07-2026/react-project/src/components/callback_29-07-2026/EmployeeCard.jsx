import React from "react";

const EmployeeCard = React.memo(({ employee, deleteEmployee }) => {
  console.log(employee.name, "Rendered");

  return (
    <div>
      <h3>{employee.name}</h3>

      <button onClick={() => deleteEmployee(employee.id)}>
        Delete
      </button>
    </div>
  );
});

export default EmployeeCard;
