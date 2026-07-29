import React from "react";
const Child = ({ name }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default React.memo (Child);


