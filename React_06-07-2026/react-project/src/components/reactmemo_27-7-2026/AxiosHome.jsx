import AxiosDelete from "./AxiosDelete";
import AxiosGet from "./AxiosGet";
import AxiosPost from "./AxiosPost";
import AxiosPut from "./AxiosPut";

function AxiosHome(){
    return(
        <div>
            <h1>Axios operations</h1>
            <AxiosGet/>
            <AxiosDelete/>
            <AxiosPost/>
            <AxiosPut/>
        </div>
    )
}
export default AxiosHome;
