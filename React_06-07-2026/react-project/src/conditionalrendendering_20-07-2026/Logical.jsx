function Logical() {
  const hasNotification = true;

  return (
    <div>
      {hasNotification && <p>You have new notifications.</p>}
    </div>
  );
}
export default Logical;
