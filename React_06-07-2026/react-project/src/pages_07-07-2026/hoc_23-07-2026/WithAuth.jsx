import React from "react";

function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = true; // Change to false to test

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;