import { useEffect, useState } from "react";
import { getEmployees } from "../../components/minitask_24-07-2026/Api";
import EmployeeList from "../../components/minitask_24-07-2026/EmployeeList";
import Loader from "../../components/minitask_24-07-2026/Loader";
import ErrorMessage from "../../components/minitask_24-07-2026/ErrorMessage";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <EmployeeList employees={employees} />
      )}
    </div>
  );
}

export default Home;