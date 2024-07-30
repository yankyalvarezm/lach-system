import React, { useState, useContext } from "react";
import "../styles/form-generator.css";
import { UserContext } from "../context/user.context";
import { jsPDF } from "jspdf";
import lachLogo from "../assets/lach-logo.png";
import spotMeUpLogo from "../assets/spotmeup-logo.png";
import bunkerLogo from "../assets/bunker-logo.png";
import neutroLogo from "../assets/neutro-logo.png";

const logos = {
  Lach: lachLogo,
  SpotMeUp: spotMeUpLogo,
  Neutro: neutroLogo,
  Bunker: bunkerLogo,
};

const FormGenerator = () => {
  const [letterData, setLetterData] = useState({
    departede: "",
    dirigida: "",
    ciudad: "",
    nombreEvento: "",
    fechaEvento: "",
    gasto: "",
    costo: "",
    beneficios: "",
    tipoEvento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLetterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loadImage = (imgSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => resolve(img);
    });
  };

  const addImageToPDF = (doc, img, x, y, width = 25, height = 25) => {
    doc.addImage(img, "PNG", x, y, width, height);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generatePDF(letterData);
  };

  const formatDate = (dateString) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} de ${month}, ${year}`;
  };

  const formatDateToday = () => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} de ${month}, ${year}`;
  };

  const todayFormatted = formatDateToday();

  const generatePDF = async (data) => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();

    const centerText = (doc, text, y) => {
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2;
      doc.text(text, x, y);
    };

    const rightAlignText = (doc, text, y, pageWidth, marginRight = 10) => {
      const textWidth = doc.getTextWidth(text);
      const x = pageWidth - textWidth - marginRight;
      doc.text(text, x, y);
    };

    const formattedDate = formatDate(data.fechaEvento);

    // ---------------
    doc.setFontSize(12);
    rightAlignText(doc, `${todayFormatted}`, 10, pageWidth);
    rightAlignText(doc, `${data.ciudad}, Rep. Dom.`, 16, pageWidth);
    // ---------------
    doc.text(`Señor (es):`, 10, 20);
    doc.text(`${data.dirigida}`, 10, 25);
    // ---------------
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    centerText(
      doc,
      `Asunto: Propuesta de Patrocinio - ${data.nombreEvento}`,
      35
    );

    // ---------------
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      `Queridos destinatarios, es un placer saludarles cordialmente. Nos dirigimos a ustedes con el propósito de expresar nuestro interés en contar con el respaldo de su respetada empresa.`,
      10,
      45,
      { maxWidth: 190 }
    );

    // ---------------

    // ---------------

    if (data.departede === "Lach & SpotMeUp") {
      const lachImg = await loadImage(logos["Lach"]);
      addImageToPDF(doc, lachImg, 10, 225, 50, 25);

      const spotMeUpImg = await loadImage(logos["SpotMeUp"]);
      addImageToPDF(doc, spotMeUpImg, 170, 230, 20, 20);
    } else {
      const selectedLogo = logos[data.departede];
      if (selectedLogo) {
        const img = await loadImage(selectedLogo);
        if (data.departede === "Lach") {
          addImageToPDF(doc, img, 10, 225, 50, 25);
        } else if (data.departede === "SpotMeUp") {
          addImageToPDF(doc, img, 10, 230, 20, 20);
        } else if (data.departede === "Bunker") {
          addImageToPDF(doc, img, 10, 230, 30, 15);
        } else if (data.departede === "Neutro") {
          addImageToPDF(doc, img, 10, 230, 50, 15);
        } else {
          addImageToPDF(doc, img, 10, 10, 25, 25);
        }
      }
    }

    doc.save(`carta-patrocinio-${data.nombreEvento}.pdf`);
  };

  return (
    <div className="form-generator-parent">
      <h1 className="login-form-title">Como va estructurada la carta?</h1>

      <div className="form-generator-container">
        <h1 className="form-generator-form-title">Formulario</h1>
        <form onSubmit={handleSubmit} className="form-generator-form">
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
              <option value="Bunker">Bunker</option>
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
              type="button"
              className="solar-en-banda"
              onClick={() => setGenerator(false)}
            >
              Soltar en banda
            </button>
            <button type="submit">Meter Mano</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormGenerator;
