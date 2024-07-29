import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/user.context";
import LogIn from "./Pages/LogIn";
import "./styles/app.css";
import HomePage from "./Pages/HomePage";
import FormGenerator from "./Pages/FormGenerator";

function App() {
  const { isLoggedIn, setGenerator, generator } = useContext(UserContext);

  useEffect(() => {
    console.log("generator:", generator);
  }, [generator]);

  return (
    <div>
      <div className="login-form-parent">{!isLoggedIn && <LogIn />}</div>
      {!generator && <>{isLoggedIn && <HomePage />}</>}

      {generator && <FormGenerator />}
    </div>
  );
}

export default App;
