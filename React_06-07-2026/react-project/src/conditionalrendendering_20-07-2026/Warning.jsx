function Warning({ show }) {
  if (!show) {
    return null;
  }

  return <h2>Warning!</h2>;
}
export default Warning;
