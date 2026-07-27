import React from "react";
import { deleteUser } from "./ApiService";
function AxiosDelete() {
    const handleDelete = async () => {
        await deleteUser(1);
        alert("User Deleted");
  };
   return (
    <button onClick={handleDelete}>
      Delete User
    </button>
  );
}

export default AxiosDelete;
