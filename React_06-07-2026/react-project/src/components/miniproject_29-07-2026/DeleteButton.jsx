import React from "react";

const DeleteButton = ({ deleteEmployee }) => {
  console.log("Delete Button Rendered");

  return (
    <button onClick={() => deleteEmployee(1)}>
      Delete Employee
    </button>
  );
};

export default React.memo(DeleteButton);
