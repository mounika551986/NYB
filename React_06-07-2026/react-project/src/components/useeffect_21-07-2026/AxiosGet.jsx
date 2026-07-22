import { useState, useEffect } from "react";
import axios from "axios";

function AxiosGet() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default AxiosGet;