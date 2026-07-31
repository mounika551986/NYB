import ReactDOM from "react-dom";

function Modal(){

    return ReactDOM.createPortal(

        <div className="modal">
            <h2>Welcome</h2>
        </div>,

        document.getElementById("portal")
    );
}

export default Modal;
