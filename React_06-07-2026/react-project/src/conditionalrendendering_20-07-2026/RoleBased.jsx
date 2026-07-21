
function AdminDashboard() {
  return <h2>Admin Dashboard</h2>;
}

function StudentDashboard() {
  return <h2>Student Dashboard</h2>;
}

function GuestDashboard() {
  return <h2>Guest Dashboard</h2>;
}

function RoleBased() {
  const role = "Admin";

  return (
    <div>
      <h1>Role Based Rendering</h1>

      {role === "Admin" && <AdminDashboard />}
      {role === "Student" && <StudentDashboard />}
      {role !== "Admin" && role !== "Student" && <GuestDashboard />}
    </div>
  );
}

export default RoleBased;