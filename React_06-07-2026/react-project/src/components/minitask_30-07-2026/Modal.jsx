import { createPortal } from "react-dom";
import { useState } from "react";

function Modal({ isOpen, onClose }) {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${name}`);
  };

  if (!isOpen) return null;

  return createPortal(

    <div style={overlayStyle}>

      <div style={modalStyle}>

        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => console.log("Input Focused")}
            onBlur={() => console.log("Input Lost Focus")}
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{ marginLeft: "10px" }}
          >
            Close
          </button>

        </form>

      </div>

    </div>,

    document.getElementById("portal-root")
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "350px",
  textAlign: "center"
};

export default Modal;