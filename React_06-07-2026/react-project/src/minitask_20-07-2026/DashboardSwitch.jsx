function DashboardSwitch() {
  const userType = "Student";

  let dashboard;

  switch (userType) {
    case "Admin":
      dashboard = <h2>Welcome to Admin Dashboard</h2>;
      break;

    case "Student":
      dashboard = <h2>Welcome to Student Dashboard</h2>;
      break;

    case "Teacher":
      dashboard = <h2>Welcome to Teacher Dashboard</h2>;
      break;

    default:
      dashboard = <h2>Welcome Guest</h2>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      {dashboard}
    </div>
  );
}

export default DashboardSwitch;