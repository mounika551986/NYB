function ChildOne(props) {

  const sendData = () => {
    props.sendMessage("Hello from Child One");
  };

  return (
    <>
      <h2>Child One</h2>

      <button onClick={sendData}>
        Send to Child Two
      </button>
    </>
  );
}

export default ChildOne;