import React, { useContext } from "react";
import { UserContext } from "./context/user.context";
import LogIn from "./Pages/LogIn";
import "./styles/app.css";
import HomePage from "./Pages/HomePage";

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <div className="login-form-parent">{!isLoggedIn && <LogIn />}</div>
      {isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
