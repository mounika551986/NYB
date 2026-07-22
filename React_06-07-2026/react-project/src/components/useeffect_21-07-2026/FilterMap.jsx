import { useState, useEffect } from "react";

function FilterMap() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users
        .filter((user) => user.name.startsWith("C"))
        .map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
    </div>
  );
}

export default FilterMap;