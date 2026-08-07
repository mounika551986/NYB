import { Link } from "react-router-dom";

function MiEmployees() {
  const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "David" },
    { id: 3, name: "Smith" },
    { id: 4, name: "Miller" },
  ];

  return (
    <div>
      <h1>Employees</h1>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiEmployees;