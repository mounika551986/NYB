import { useEffect } from "react";

function EmptyArray() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <h1>Hello React</h1>
  );
}

export default EmptyArray;