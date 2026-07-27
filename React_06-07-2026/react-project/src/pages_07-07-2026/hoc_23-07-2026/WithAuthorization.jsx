import React from "react";

function withAuthorization(WrappedComponent) {
  return function AuthorizationComponent(props) {

    const role = "Admin"; // Change to "User"

    if (role !== "Admin") {
      return <h2>Access Denied</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuthorization;