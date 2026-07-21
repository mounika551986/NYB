function Switch() {
  const role = "Teacher";

  let message;

  switch (role) {
    case "Admin":
      message = <h2>Welcome Admin</h2>;
      break;

    case "Student":
      message = <h2>Welcome Student</h2>;
      break;

    case "Teacher":
      message = <h2>Welcome Teacher</h2>;
      break;

    default:
      message = <h2>Welcome Guest</h2>;
  }

  return (
    <div>
      <h1>Switch Case Example</h1>
      {message}
    </div>
  );
}

export default Switch;
