import React from "react";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div>
      <h1 className="login-form-title no-margin-bottom">KLK Vamo hacer?</h1>
      <div className="home-page-container">
        <div className="generators-container">
          <h1 className="cartas-container">
            Cartas & Patrocinios
            <span>Generar</span>
          </h1>
          <h1 className="less-opacity">No se que mas</h1>
          <h1 className="less-opacity">Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
