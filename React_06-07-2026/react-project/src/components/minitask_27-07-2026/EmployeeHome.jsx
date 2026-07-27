import { useEffect, useState } from "react";
import { getEmployees } from "./ApiService";
import EmployeeList from "./EmployeeList";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

function EmployeeHome() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {

        setLoading(true);

        try {

            const response = await getEmployees();

            setEmployees(response.data);

        }
        catch (error) {

            setError("Unable to fetch employees");

        }
        finally {

            setLoading(false);

        }

    };
    return(
        <div style={{ padding: "20px" }}>

            <h1>Employee Directory</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Counter : {count}
            </button>
            <hr/>
            {loading && <Loader/>}
            {error && <ErrorMessage message={error}/>}
            {!loading && !error&&(
                <EmployeeList employees={employees}/>
            )}
            </div>
    );
}
export default EmployeeHome;