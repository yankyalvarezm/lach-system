import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users] = useState([
    { username: "lachglobal", password: "rickyDescargado" },
  ]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, users }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
