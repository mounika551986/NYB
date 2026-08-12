import { useContext } from "react";
import { UserContext } from "./UserContext_12";



function Profile_12() {
  const { user, setUser } = useContext(UserContext);

  const changeName = () => {
    setUser({
      ...user,
      name: "Alice",
    });
  };

  return (
    <div>
      <h2>Profile</h2>

      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default Profile_12;