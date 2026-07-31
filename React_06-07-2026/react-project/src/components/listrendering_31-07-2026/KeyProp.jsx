const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "David" }
];

function KeyProp() {
  return (
    <>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}
export default KeyProp;
