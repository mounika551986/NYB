import ReactDOM from "react-dom";

function Popup({ show }) {

    if (!show) return null;

    return ReactDOM.createPortal(

        <div style={popupStyle}>
            Successfully Saved!
        </div>,

        document.getElementById("portal-root")
    );
}

const popupStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "blue",
    color: "white",
    padding: "15px",
    borderRadius: "8px"
};

export default Popup;