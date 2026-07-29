import { useState, useCallback } from "react";
import EmployeeCard from "./EmployeeCard";

function UseCallback() {
  const [company, setCompany] = useState("ABC Ltd");

  const employees = [
    { id: 1, name: "Mounika" },
    { id: 2, name: "Rahul" }
  ];

  const deleteEmployee = useCallback((id) => {
    console.log("Delete Employee:", id);
  }, []);

  return (
    <div>
      <h1>{company}</h1>

      <button onClick={() => setCompany("XYZ Ltd")}>
        Change Company
      </button>

      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          employee={emp}
          deleteEmployee={deleteEmployee}
        />
      ))}
    </div>
  );
}

export default UseCallback;