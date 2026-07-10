import { useState } from "react";
import api from "../../api/api";
import "./AxiosPractice.css";

function AxiosPractice() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // GET
  const getUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
      setMessage("GET Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // POST
  const addUser = async () => {
    try {
      const response = await api.post("/users", {
        name: "Mounika",
        email: "mounika@gmail.com",
      });

      console.log(response.data);
      setMessage("POST Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // PUT
  const updateUser = async () => {
    try {
      const response = await api.put("/users/1", {
        id: 1,
        name: "Updated User",
        email: "updated@gmail.com",
      });

      console.log(response.data);
      setMessage("PUT Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // PATCH
  const patchUser = async () => {
    try {
      const response = await api.patch("/users/1", {
        name: "Patched User",
      });

      console.log(response.data);
      setMessage("PATCH Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // DELETE
  const deleteUser = async () => {
    try {
      await api.delete("/users/1");
      setMessage("DELETE Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Axios API Practice</h1>

      <button onClick={getUsers}>GET</button>
      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={patchUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>

      <h3>{message}</h3>

      {users.map((user) => (
        <div className="card" key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default AxiosPractice;
