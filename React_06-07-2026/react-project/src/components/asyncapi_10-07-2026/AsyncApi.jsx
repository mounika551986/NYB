import { useState } from "react";
import "./AsyncApi.css";

function AsyncApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Async/Await Example
  const fetchUsers = async () => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
      setSuccess("Users loaded successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Promise Chaining Example
  const fetchUsersWithPromise = () => {
    setLoading(true);
    setSuccess("");
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setSuccess("Users loaded using Promise.");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>Async Programming with APIs</h1>

      <button onClick={fetchUsers}>Load Users (Async/Await)</button>

      <button onClick={fetchUsersWithPromise}>
        Load Users (Promise)
      </button>

      {loading && <h2>Loading...</h2>}

      {success && <h3 className="success">{success}</h3>}

      {error && <h3 className="error">{error}</h3>}

      {users.map((user) => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default AsyncApi;
