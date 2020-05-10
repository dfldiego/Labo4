import React, { Fragment } from "react";
import "../assets/css/Tarjeta.css";
import Image from "react-bootstrap/Image";
import Envio from "./Envio";

const Tarjeta = ({ instrumento }) => {
    
    const captura_instrumento = id =>{
        localStorage.setItem("id_instrumento",id);
    }

  return (
    <Fragment>
      <div>
        <table>
          <tr>
            <td>
              <a href={`DetalleProducto/${instrumento.id}`}>
                <Image
                  alt="Imagen de instrumento"
                  src={require(`../assets/images/${instrumento.imagen}`)}
                  onClick={() => captura_instrumento(instrumento.id)}
                />
              </a>
            </td>
            <td>
              <h2>{instrumento.instrumento}</h2>
              <p className="precio">${instrumento.precio}</p>
              <Envio 
                key={instrumento.id}
                instrumento={instrumento}
              />
              <p>{instrumento.cantidadVendida} vendidas</p>
            </td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
};

export default Tarjeta;
