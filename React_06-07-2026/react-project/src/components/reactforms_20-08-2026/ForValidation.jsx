import { useState } from "react";

function ForValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");

    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      {error && <p>{error}</p>}

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default ForValidation;