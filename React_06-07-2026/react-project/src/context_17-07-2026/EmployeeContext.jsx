import { createContext, useState } from "react";

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;