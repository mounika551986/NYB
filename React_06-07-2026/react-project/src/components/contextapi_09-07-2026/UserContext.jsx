import { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Create Provider
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Mounika",
    city: "Hyderabad",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
