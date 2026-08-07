import { useParams } from "react-router-dom";

function MiEmployeeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Employee Details</h1>

      <h2>Employee ID : {id}</h2>
    </div>
  );
}

export default MiEmployeeDetails;