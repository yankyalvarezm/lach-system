import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users] = useState([{ username: "lachglobal", password: "1234" }]);
  const [generator, setGenerator] = useState(false);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, users, generator, setGenerator }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
