function Dashboard() {
  const userType = "Student";

  return (
    <div>
      <h1>User Dashboard</h1>

      {userType === "Admin" ? (
        <h2>Welcome to Admin Dashboard</h2>
      ) : userType === "Student" ? (
        <h2>Welcome to Student Dashboard</h2>
      ) : userType === "Teacher" ? (
        <h2>Welcome to Teacher Dashboard</h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
}

export default Dashboard;