import { useState, useEffect } from "react";

function FetchDataDependency() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <h2>{user.name}</h2>

      <button onClick={() => setUserId(userId + 1)}>
        Next User
      </button>
    </div>
  );
}

export default FetchDataDependency;