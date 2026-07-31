import { useState } from "react";
import Modal from "./Modal";

function ReactModal() {

  const [showModal, setShowModal] = useState(false);

  return (

    <div style={{ textAlign: "center", marginTop: "50px"}}>

      <h1>React Portal Mini Practice</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

    </div>

  );
}

export default ReactModal;