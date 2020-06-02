import React,{Fragment} from "react";
import "../assets/css/Tarjeta.css";

const Envio = ({ instrumento }) => {
  return (
    <Fragment>
      {instrumento.costoEnvio === "G" ? (
        <span className="costo-envio-gratis">
          <img
            alt="Imagen de camion"
            width="40px"
            src={require(`../assets/images/camion.png`)}
          />
          Envío Gratis a todo el país
        </span>
      ) : (
        <p className="costo-envio">
          Costo de envío interior del país: ${instrumento.costoEnvio}
        </p>
      )}
    </Fragment>
  );
};

export default Envio;
