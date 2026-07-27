import React from "react";
import { updateUser } from "./ApiService";

function AxiosPut() {
    const handleUpdate = async () => {
        const response = await updateUser(1,{
 name: "Updated User",
        })
console.log(response.data);
    alert("User Updated");
  }; return (
    <button onClick={handleUpdate}>
      Update User
    </button>
  );
}

export default AxiosPut;
        