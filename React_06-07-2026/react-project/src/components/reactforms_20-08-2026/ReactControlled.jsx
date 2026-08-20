import { useState } from "react";

function ReactControlled() {
  const [username, setUsername] = useState("");

  return (
    
    <div>
        <h1>Controlled component</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>Username: {username}</p>
      
    </div>
  );
}

export default ReactControlled;