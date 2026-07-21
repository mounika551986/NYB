function ElementVariables() {
  const isAdmin = false;

  let message;

  if (isAdmin) {
    message = <h1>Admin Panel</h1>;
  } else {
    message = <h1>User Dashboard</h1>;
  }

  return <div>{message}</div>;
}
export default ElementVariables;
