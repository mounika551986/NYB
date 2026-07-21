import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Show and Hide Component</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <div>
          <h2>Hello React!</h2>
          <p>This component is visible.</p>
        </div>
      )}
    </div>
  );
}

export default ShowHide;
