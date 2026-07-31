import ReactDOM from "react-dom";

function Tooltip({ show }) {

    if (!show) return null;

    return ReactDOM.createPortal(

        <div style={tooltipStyle}>
            Edit Profile
        </div>,

        document.getElementById("portal-root")
    );
}

const tooltipStyle = {
    position: "fixed",
    top: "120px",
    left: "250px",
    background: "black",
    color: "white",
    padding: "8px",
    borderRadius: "5px"
};

export default Tooltip;