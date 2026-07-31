import React from "react"
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose }) {

    if (!isOpen) return null;

    return ReactDOM.createPortal(

        <div style={overlayStyle}>

            <div style={modalStyle}>
                <h2>React Portal Modal</h2>

                <p>This modal is rendered using Portal.</p>

                <button onClick={onClose}>
                    Close
                </button>

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
    background: "pink",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center"
};

export default Modal;