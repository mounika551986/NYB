import { useEffect, useState } from "react";
import { getUsers } from "./ApiService";

function AxiosGet() {
    const[users,setUsers]= useState([]);
    useEffect(() =>{
        loadUsers();

    },[]);
    const loadUsers = async () => {
    try {
         const response=await getUsers();
         setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Axios GET</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default AxiosGet;
