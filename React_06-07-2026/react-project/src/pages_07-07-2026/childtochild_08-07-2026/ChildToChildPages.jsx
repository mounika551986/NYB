import { useState } from "react";
import ChildOne from "../../components/childtochild_08-07-2026/ChildOne";
import ChildTwo from "../../components/childtochild_08-07-2026/ChildTwo";


function ChildToChildPage() {

  const [message, setMessage] = useState("Hello React");

  const receiveMessage = (data) => {
    setMessage(data);
  };

  return (
    <>
      <h1>Child to Child Communication</h1>

      <ChildOne message={message}/>

      <hr />

      <ChildTwo message={message}/>
    </>
  );
}

export default ChildToChildPage;