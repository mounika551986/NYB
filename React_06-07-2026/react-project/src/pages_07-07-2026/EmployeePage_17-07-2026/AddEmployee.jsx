import { useContext } from "react";
import Navbar from "../../components/Employee_17-07-2026/Navbar";
import { EmployeeContext } from "../../context_17-07-2026/EmployeeContext";

function AddEmployee() {
const {employees, setEmployees}=useContext(EmployeeContext);
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] =
    useState("HR");
     function addEmployee() {
    const employee = {
      id: Date.now(),
      name,
      email,
      phone,
      department,
    };

    setEmployees([...employees, employee]);
setName("");
    setEmail("");
    setPhone("");
    setDepartment("HR");

    alert("Employee Added Successfully");
  }
    
  return (
    <>
    <Navbar/>
      <h1>Add Employee</h1>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />
       <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br/>
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <br />
      <br />

      <select
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      >
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
        <option>Sales</option>
      </select>

      <br />
      <br />

      <button onClick={addEmployee}>
        Add Employee
      </button>

    </>
  );

}

export default AddEmployee;
