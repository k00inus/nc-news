import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
