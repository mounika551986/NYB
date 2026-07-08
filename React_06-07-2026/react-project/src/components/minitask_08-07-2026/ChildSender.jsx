function ChildSender(props) {

  const sendMessage = () => {

    props.getMessage("Hello from Child Sender");

  };

  return (

    <div>

      <button onClick={sendMessage}>

        Send Message

      </button>

    </div>

  );

}

export default ChildSender;