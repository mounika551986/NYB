import React from "react";

function EmployeeCard({ name, department }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{department}</p>
    </div>
  );
}

export default React.memo(EmployeeCard);

