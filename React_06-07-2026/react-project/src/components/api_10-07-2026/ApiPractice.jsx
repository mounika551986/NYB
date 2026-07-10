import { useState } from "react";
import "./ApiPractice.css";

function ApiPractice() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // GET
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
      setMessage("GET Request Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // POST
  const addUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Mounika",
            email: "mounika@gmail.com",
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      setMessage("POST Request Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // PUT
  const updateUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            name: "Updated User",
            email: "updated@gmail.com",
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      setMessage("PUT Request Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // PATCH
  const patchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Patched User",
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      setMessage("PATCH Request Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // DELETE
  const deleteUser = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE",
      });

      setMessage("DELETE Request Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Fetch API Practice</h1>

      <button onClick={getUsers}>GET Users</button>

      <button onClick={addUser}>POST User</button>

      <button onClick={updateUser}>PUT User</button>

      <button onClick={patchUser}>PATCH User</button>

      <button onClick={deleteUser}>DELETE User</button>

      <h3>{message}</h3>

      {users.map((user) => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiPractice;