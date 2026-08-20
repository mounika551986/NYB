import { useRef } from "react";

function ReactUncontrolled() {
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Uncontrolled component</h1>
      <input
        type="text"
        ref={usernameRef}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default ReactUncontrolled;