import { useDispatch } from "react-redux";
import { changeCity } from "../../features/city_16-07-2026/CitySlice";

function CitySelector(){
    const  dispatch=useDispatch();
    const handleChange = (e) => {
        dispatch(changeCity(e.target.value));

};
return (

    <div style={{ marginTop: "30px" }}>

      <h2>Select City</h2>

      <select onChange={handleChange}>

        <option>Hyderabad</option>

        <option>Chennai</option>
        <option>Bangalore</option>

        <option>Delhi</option>

      </select>

    </div>
)
}
export default CitySelector;
