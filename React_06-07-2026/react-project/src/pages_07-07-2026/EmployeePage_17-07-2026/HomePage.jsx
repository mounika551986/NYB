import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Employee_17-07-2026/Navbar";
import Searchbar from"../../components/Employee_17-07-2026/Searchbar";
import DepartmentFilter from "../../components/Employee_17-07-2026/DepartmentFilter";
import Loader from "../../components/Employee_17-07-2026/Loader";
import EmployeeList from "../../components/Employee_17-07-2026/EmployeeList";
import { EmployeeContext } from "../../context_17-07-2026/EmployeeContext";
import { API_URL } from "../../services_17-07-2026/api";

function HomePage() {
  const {
    employees,
    setEmployees,
    loading,
    setLoading,
    error,
    setError,
  } = useContext(EmployeeContext);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const data = await response.json();

      const updatedEmployees = data.map((employee, index) => ({
        ...employee,
        department: ["HR", "IT", "Finance", "Sales"][index % 4],
      }));

      setEmployees(updatedEmployees);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDepartment =
      department === "" || employee.department === department;

    return matchSearch && matchDepartment;
  });

  return (
    <>
      <Navbar />

      <h1>Employee Dashboard</h1>

      <Searchbar
        search={search}
        setSearch={setSearch}
      />

      <DepartmentFilter
        department={department}
        setDepartment={setDepartment}
      />

      {loading && <Loader />}

      {error && (
        <h2 style={{ color: "red" }}>{error}</h2>
      )}

      {!loading && !error && (
        <EmployeeList employees={filteredEmployees} />
      )}
    </>
  );
}

export default HomePage;