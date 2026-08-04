import { useParams } from "react-router-dom";

function UserUrl() {

  const { id } = useParams();

  return (

    <h2>User ID : {id}</h2>

  );

}

export default UserUrl;