import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
