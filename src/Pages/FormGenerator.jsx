import React, { useState, useContext } from "react";
import "../styles/form-generator.css";
import { UserContext } from "../context/user.context";

const FormGenerator = () => {
  const [letterData, setLetterData] = useState({
    departede: "",
    dirigida: "",
    ciudad: "",
    nombreEvento: "",
    fechaEvento: "",
    gasto: "",
    beneficios: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLetterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la carta:", letterData);
  };

  const { setGenerator } = useContext(UserContext);

  return (
    <div className="form-generator-parent">
      <h1 className="login-form-title">Como va estructurada la carta?</h1>

      <div className="form-generator-container">
        <h1 className="form-generator-form-title">Formulario</h1>
        <div className="display-flex">
          <select
            name="departede"
            id="departede"
            className="departede"
            value={letterData.departede}
            onChange={handleChange}
          >
            <option value="">De Parte De:</option>
            <option value="Lach & SpotMeUp">Lach & SpotMeUp</option>
            <option value="Lach">Lach</option>
            <option value="SpotMeUp">SpotMeUp</option>
            <option value="Neutro">Neutro</option>
          </select>

          <select
            name="dirigida"
            id="dirigida"
            className="departede"
            value={letterData.dirigida}
            onChange={handleChange}
          >
            <option value="">Dirigida A:</option>
            <option value="Casa Brugal">Casa Brugal</option>
            <option value="Cerverceria Nacional">Cerverceria Nacional</option>
            <option value="United Brands">United Brands</option>
            <option value="Vocatus">Vocatus</option>
            <option value="Manuel Gonzales Cuesta">
              Manuel Gonzales Cuesta
            </option>
            <option value="Elias Distribución">Elias Distribución</option>
            <option value="Mercasid">Mercasid</option>
            <option value="Fiji Water">Fiji Water</option>
            <option value="Karma">Karma</option>
            <option value="Pernod Ricard">Pernod Ricard</option>
          </select>
        </div>
        <select
          name="ciudad"
          id="ciudad"
          className="departede"
          value={letterData.ciudad}
          onChange={handleChange}
        >
          <option value="">--Ciudad--</option>
          <option value="La Vega">La Vega</option>
          <option value="Santiago">Santiago</option>
          <option value="Santo Domingo">Santo Domingo</option>
          <option value="Puerto Plata">Puerto Plata</option>
        </select>
        <div className="display-flex">
          <input
            type="text"
            placeholder="Nombre Evento"
            name="nombreEvento"
            value={letterData.nombreEvento}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Fecha Evento"
            name="fechaEvento"
            value={letterData.fechaEvento}
            onChange={handleChange}
          />
        </div>
        <div className="display-flex">
          <input
            type="text"
            placeholder="Tipo de Gasto"
            name="gasto"
            value={letterData.gasto}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Costo"
            name="costo"
            value={letterData.costo}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Beneficios a ofrecer."
          className="input-class"
          name="beneficios"
          value={letterData.beneficios}
          onChange={handleChange}
        />
        <div className="buttons-submits">
          <button
            className="solar-en-banda"
            onClick={() => setGenerator(false)}
          >
            Soltar en banda
          </button>
          <button onClick={handleSubmit}>Meter Mano</button>
        </div>
      </div>
    </div>
  );
};

export default FormGenerator;
