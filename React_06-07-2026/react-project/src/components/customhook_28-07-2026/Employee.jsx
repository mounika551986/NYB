import UseFetch from "../../customhook_28-07-2026/UseFetch";

function Employee() {
  const {
    data: employees,
    loading,
    error,
  } = UseFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h2>Employees</h2>

      {employees.map((employee) => (
        <p key={employee.id}>{employee.name}</p>
      ))}
    </>
  );
}

export default Employee;