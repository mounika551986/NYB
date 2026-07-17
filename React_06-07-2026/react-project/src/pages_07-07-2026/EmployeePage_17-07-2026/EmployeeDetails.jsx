import { useParams } from "react-router-dom";
import Navbar from "../../components/Employee_17-07-2026/Navbar";
import { useContext } from "react";
import { EmployeeContext } from "../../context_17-07-2026/EmployeeContext";

function EmployeeDetails() {
const{id}=useParams;
const{employees}=useContext(EmployeeContext);
const employee = employees.find(
    (emp) => emp.id.toString() === id
  );

  if (!employee)
  return (
    <>
    <Navbar/>
      <h1>Employee Details</h1>
      <h2>{employee.name}</h2>

      <p>Email : {employee.email}</p>

      <p>Phone : {employee.phone}</p>

      <p>Department : {employee.department}</p>
    </>
  );

}

export default EmployeeDetails;