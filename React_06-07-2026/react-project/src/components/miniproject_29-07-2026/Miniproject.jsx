import { useState, useMemo, useCallback } from "react";
import ClassEmployee from "./ClassEmployee";
import FunctionalEmployee from "./FunctionalEmployee";
import Salary from "./Salary";
import Deletebutton from "./Deletebutton";

function Miniproject() {
  const [company, setCompany] = useState("ABC Technologies");
  const [count, setCount] = useState(0);
  const employees = [
    { id: 1, name: "Mounika", salary: 50000 },
    { id: 2, name: "Rahul", salary: 60000 },
    { id: 3, name: "Priya", salary: 55000 },
  ];
 const totalSalary = useMemo(() => {
    console.log("Calculating Total Salary...");

    return employees.reduce((sum, emp) => sum + emp.salary, 0);
  }, [employees]);

  // useCallback Example
  const deleteEmployee = useCallback((id) => {
    console.log("Delete Employee:", id);
  }, []);

  console.log("App Rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>

      <h2>{company}</h2>

      <button onClick={() => setCompany("XYZ Technologies")}>
        Change Company
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increment ({count})
      </button>

      <hr />

      <ClassEmployee name="Mounika" />

      <hr />

      <FunctionalEmployee name="Rahul" />

      <hr />

      <Salary total={totalSalary} />

      <hr />

      <Deletebutton deleteEmployee={deleteEmployee}/>
    </div>
  );
}

export default Miniproject;