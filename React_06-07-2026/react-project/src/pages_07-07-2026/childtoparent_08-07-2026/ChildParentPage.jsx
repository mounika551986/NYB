import ChildButton from "../../components/childtoparent_08-07-2026/ChildButton";
import { useState } from "react";

function ChildToParentPage() {

  const [message, setMessage] = useState("React is awesome!");

  const receiveMessage = (data) => {
    setMessage(data);
  };

  return (
    <>
      <h2>Child to Parent Communication</h2>

      <p>Message: {message}</p>
      <ChildButton getMessage={receiveMessage} />
      </>
  );
}
export default ChildToParentPage;


