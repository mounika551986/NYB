import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Name Input</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello {name}</h3>
    </div>
  );
}

export default NameInput;
