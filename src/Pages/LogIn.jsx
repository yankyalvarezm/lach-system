import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import "../styles/login.css";

const LogIn = () => {
  const { users, setIsLoggedIn } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setMessage("Ready!");
    } else {
      setMessage("Acuerdate mrc, esa no es...");
      setTimeout(() => {
        setMessage(null)
      }, 3000);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h1 className="login-form-title">
        Si no eres Frxcky, Mi querido o yo, vete de aqui
      </h1>
      <div className="login-form-fields-container">
        <h1 className="input-your-data">Ingresa tus Datos</h1>
        <div className="login-fields-sub-containers">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-form-submit">Meter Mano</button>
      </div>
      {message && <p className="invalid-password">{message}</p>}
    </form>
  );
};

export default LogIn;
