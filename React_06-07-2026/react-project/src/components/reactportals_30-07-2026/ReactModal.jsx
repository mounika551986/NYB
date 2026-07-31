import { useState } from "react";
import Modal from "./Modal";
import Popup from "./Popup";
import Tooltip from "./Tooltip";

function ReactModal() {

    const [show, setShow] = useState(false);
    const [popup, setPopup] = useState(false);
    const [showTip, setShowTip] = useState(false);


    return (

        <div>

            <h1>React Portals</h1>

            <button onClick={() => setShow(true)}>
                Open Modal
            </button>

            <Modal
                isOpen={show}
                onClose={() => setShow(false)}
            />
            <br></br>
            {/* Popup Button */}
      <button onClick={() => setPopup(true)}>
        Show Popup
      </button>
      <Popup show={popup} />

      <button
onMouseEnter={() => setShowTip(true)}
onMouseLeave={() => setShowTip(false)}
>
Hover Me
</button>

<Tooltip show={showTip} />

        </div>

    );
}

export default ReactModal;