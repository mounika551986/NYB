import React from "react";

function EmployeeCard({ employee }) {
  console.log("Rendering:", employee.name);

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Website: {employee.website}</p>
    </div>
  );
}

export default React.memo(EmployeeCard);
