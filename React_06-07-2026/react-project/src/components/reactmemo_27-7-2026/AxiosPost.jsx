
import React from "react";
import { addUser } from "./ApiService";
function AxiosPost() {
      const handlePost = async () => {
 const response = await addUser({
    name: "Mounika",
      email: "mounika@gmail.com",
 });
      console.log(response.data);
    alert("User Added");
  };

  return (
    <button onClick={handlePost}>
      Add User
    </button>
  );
}

export default AxiosPost;
