import { useEffect } from "react";

function EventListener() {

  useEffect(() => {

    function handleResize() {
      console.log("Window resized");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return <h2>Resize the Window</h2>;
}

export default EventListener;