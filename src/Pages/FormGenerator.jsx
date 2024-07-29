import React, { useState, useContext } from "react";
import "../styles/form-generator.css";
import { UserContext } from "../context/user.context";
import { jsPDF } from "jspdf";

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
    generatePDF(letterData);
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

  const generatePDF = (data) => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();

    const centerText = (doc, text, y) => {
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2;
      doc.text(text, x, y);
    };

    const formattedDate = formatDate(data.fechaEvento);
    // ---------------
    doc.setFontSize(12);
    doc.text(`${formattedDate}`, 165, 10);
    doc.text(`${data.ciudad}, Rep. Dom.`, 153, 16);
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
    doc.text(`¿Quiénes somos?`, 10, 45);

    // ---------------
    doc.text(
      `Somos un consorcio de empresas, entre ellas, bares, promotora de eventos y plataforma de boletería ligados a la Holding de radiodifusión más importante de la región norte de nuestro país. En lo que respecta a nuestra negociación, es fundamental el entendimiento de dos de ellas:`,
      10,
      55,
      { maxWidth: 190 }
    );

    // ---------------

    doc.text(
      `Lach Global: Es una productora de eventos oriunda de nuestra ciudad natal, ${data.ciudad}. Nuestro primer evento fue realizado el pasado sábado ocho (8) de junio en el Salón de Eventos de Shia Restaurant, ${data.ciudad}, en el cual alcanzamos la capacidad máxima de visitantes para el establecimiento (250 personas), con diez (10) días de promoción, en un salón de eventos adecuado por nosotros y únicamente la participación de dj's como atracciones. Nuestro segundo evento fue realizado el pasado sábado veintidós (22) de julio en el Bunker Headquarters, ${data.ciudad}, bajo la modalidad de Open Bar, en cuyo establecimiento agotamos su capacidad máxima (150 personas) con cinco (5) días de promoción y únicamente la participación de dj's como atracciones.`,
      10,
      150,
      { maxWidth: 190 }
    );

    doc.text(
      `Spot me Up: Plataforma de boletería más innovadora en la República Dominicana, totalmente digital y con amenidades nunca utilizadas en nuestro país y gran parte del caribe. Aún no se ha lanzado al mercado, sigue en pruebas de eventos internos a través de nuestros bares, pero la idea es que sea anunciada y promocionada con los eventos que corresponden a nuestra negociación, los espectáculos de ${data.nombreEvento}.`,
      10,
      190,
      { maxWidth: 190 }
    );

    doc.text(`¿Qué queremos?`, 10, 220);
    doc.text(
      `Nuestra intención es lograr una colaboración en los eventos planificados para los días viernes diecinueve (19) y veinte (20) de julio del presente año. Los eventos recaen en la participación de la artista de origen Puerto Riqueño 'De La Rose' y un aglomerado de dj's de nacionalidad dominicana, especialmente de La Vega, Santiago De Los Caballeros y Santo Domingo. Dichos eventos, se realizaran de la siguiente manera:`,
      10,
      230,
      { maxWidth: 190 }
    );

    doc.text(
      `Viernes 19 de Julio (La Ciguapa, Santiago De Los Caballeros) El primer evento se realizará en la discoteca que en la actualidad posee el mayor prestigio de la región norte del país, La Ciguapa, la cual esta capacitada para hasta 900 personas. El espectáculo se realizará bajo la modalidad de venta de boletas y reservas de mesas (actividad común de la discoteca).`,
      10,
      260,
      { maxWidth: 190 }
    );

    doc.text(
      `Sábado 20 de Julio (Teatro Bisou, Santo Domingo) El segundo evento se realizará en un establecimiento alquilado por nosotros capacitado para hasta 350 personas. Su modalidad será desarrollada bajo la temática de Open Bar y la reserva de mesas, para facilitar al consumidor de optar por la opción de un ticket con bebida incluida o la reserva de un espacio para consumir botellas de la bebida de su preferencia.`,
      10,
      280,
      { maxWidth: 190 }
    );

    doc.text(`¿Qué Ofrecemos?`, 10, 310);
    doc.text(
      `En vista de que los eventos están ideados para todo publico mayor de dieciocho (18) años, ofrecemos una alta capacidad de presencia para sus marcas de manera tradicional y digital, entre ellas, a manera de sugerencia y en capacidad de escuchar propuestas, ofrecemos:`,
      10,
      320,
      { maxWidth: 190 }
    );

    doc.text(
      `Publicidad Digital: Redes Sociales (Flyers y Video de Recap)`,
      10,
      330,
      { maxWidth: 190 }
    );
    doc.text(
      `Acceso al marcaje promocional: Stands, Truss y letreros`,
      10,
      340,
      { maxWidth: 190 }
    );
    doc.text(`Exclusividad: En la bebida de su tipo`, 10, 350, {
      maxWidth: 190,
    });
    doc.text(
      `Posible Publicidad a través de medios de radio: @Grupomedrano / @Ritmodelamanana Ponderado para un patrocinador oficial`,
      10,
      360,
      { maxWidth: 190 }
    );

    doc.text(
      `En conclusión, nuestro intereses recae en iniciar una colaboración comercial con ustedes a través de estos eventos pautados para los días diecinueve (19) y veinte (20) de julio en Santiago De Los Caballeros y Santo Domingo.`,
      10,
      380,
      { maxWidth: 190 }
    );

    doc.text(
      `Sin más por el momento, quedando a la espera de una respuesta afectiva, me despido.`,
      10,
      400
    );

    doc.text(`Att,`, 10, 420);
    doc.text(`Jean Álvarez Medrano`, 10, 430);

    doc.save("carta-patrocinio.pdf");
  };

  const { setGenerator } = useContext(UserContext);

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
