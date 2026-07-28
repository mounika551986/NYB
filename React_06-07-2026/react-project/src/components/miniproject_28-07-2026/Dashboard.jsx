import UseFetch from "../../customhook_28-07-2026/UseFetch";
import EmployeeCard from "./EmployeeCard";
import Header from "./Header";

function Dashboard() {
  const { data, loading, error } =UseFetch( "https://jsonplaceholder.typicode.com/users"
  );
   if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
    <Header/>
     {data.map((employee) => (
        <EmployeeCard
        key={employee.id}
          employee={employee}
          />
     ))}
    </>
  )
}
export default Dashboard;

     
