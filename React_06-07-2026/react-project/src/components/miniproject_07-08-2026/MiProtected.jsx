import { Navigate } from "react-router-dom";

function MiProtected({ children }) {
  // Change to false to test redirection
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/MiLogin" replace />;
}

export default MiProtected;