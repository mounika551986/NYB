import { useState } from "react";
import ChildToggle from "./ChildToggle";


function ParentToggle() {

  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle Child
      </button>

      {show && <ChildToggle />}
    </>
  );
}

export default ParentToggle;