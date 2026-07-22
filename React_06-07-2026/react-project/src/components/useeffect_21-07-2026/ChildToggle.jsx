import { useEffect } from "react";

function ChildToggle() {

  useEffect(() => {

    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };

  }, []);

  return <h2>Child Component</h2>;
}

export default ChildToggle;