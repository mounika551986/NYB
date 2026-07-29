import React from "react";

const FunctionalEmployee = ({ name }) => {
  console.log("React.memo Rendered");

  return (
    <div>
      <h3>Functional Employee : {name}</h3>
    </div>
  );
};

export default React.memo(FunctionalEmployee);
