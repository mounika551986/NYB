import { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <h2>Toggle Example</h2>

      <button onClick={() => setStatus(!status)}>
        Toggle
      </button>

      <h3>{status ? "Light ON" : "Light OFF"}</h3>
    </div>
  );
}

export default Toggle;
