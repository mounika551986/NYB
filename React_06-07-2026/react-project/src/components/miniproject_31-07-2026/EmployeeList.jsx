import employees from "../../pages_07-07-2026/miniproject_31-07-2026/employee";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  return (
    <>
      {employees.map(({ id, name, department }) => (
        <EmployeeCard
          key={id}
          name={name}
          department={department}
        />
      ))}
    </>
  );
}

export default EmployeeList;
