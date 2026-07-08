function ChildButton(props) {

  const sendMessage = () => {
    props.getMessage("Hello Parent! Message from Child.");
  };

  return (
    <button onClick={sendMessage}>
      Send Message
    </button>
  );
}

export default ChildButton;
