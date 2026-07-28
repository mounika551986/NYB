function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px",backgroundColor:"aqua"}}>
      {children}
    </div>
  );
}

function ComponentComposition() {
  return (
    <Card>
      <h2>Student Details</h2>
      <p>Name: Mounika</p>
      <p>College:ABC</p>
    </Card>
  );
}

export default ComponentComposition;