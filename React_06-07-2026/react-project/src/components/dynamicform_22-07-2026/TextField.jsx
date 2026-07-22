import { useState } from "react";

function TextField() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Text Field</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <h3>{name}</h3>
    </div>
  );
}

export default TextField;