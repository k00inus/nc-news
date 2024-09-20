import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState("");
  const [filter, setFilter] = useState({
    sort_by: "created_at",
    order: "desc",
  });

  return (
    <UserContext.Provider
      value={{ loggedIn, setLoggedIn, user, setUser, filter, setFilter }}
    >
      {children}
    </UserContext.Provider>
  );
};
