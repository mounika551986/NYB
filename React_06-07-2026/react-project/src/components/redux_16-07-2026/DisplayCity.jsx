import { useSelector } from "react-redux";

function CityDisplay() {

  const city = useSelector(
    (state) => state.city.selectedCity
  );

  return (

    <div style={{ marginTop: "20px" }}>

      <h2>Current City</h2>

      <h3>{city}</h3>

    </div>

  );

}

export default CityDisplay;
