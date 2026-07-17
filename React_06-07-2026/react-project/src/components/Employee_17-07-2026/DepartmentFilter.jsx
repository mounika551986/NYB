function DepartmentFilter({
  department,
  setDepartment,
}) {
  return (
    <select
      value={department}
      onChange={(e) =>
        setDepartment(e.target.value)
      }
    >
      <option value="">All Departments</option>

      <option value="HR">HR</option>

      <option value="IT">IT</option>

      <option value="Finance">
        Finance
      </option>

      <option value="Sales">
        Sales
      </option>
    </select>
  );
}

export default DepartmentFilter;
