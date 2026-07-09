import Counter from "./Counter";
import NameInput from "./NameInput";
import Toggle from "./Toggle";

function LocalState(){
    return(
        <div>
            <h1>React Local State</h1>
            <Toggle/>
            <hr/>
            <Counter/>
            <hr/>
            <NameInput/>
        </div>
    )
}
export default LocalState;
