import { useContext } from "react";
import { UserContext } from "./UserContext_12";


function Navbar_12() {
  const {user} = useContext(UserContext);

  return (
    <div>
      <h2>Navbar</h2>
      <h3>Welcome {user.name}</h3>
    </div>
  );
}

export default Navbar_12;