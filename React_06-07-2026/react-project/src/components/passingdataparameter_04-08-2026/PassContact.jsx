import { useLocation } from "react-router-dom";

function PassContact() {

  const location = useLocation();

  return (

    <div>

      <h1>Contact Page</h1>

      <h2>Name : {location.state.name}</h2>

      <h2>City : {location.state.city}</h2>

      <h2>Age : {location.state.age}</h2>

    </div>

  );
}

export default PassContact;