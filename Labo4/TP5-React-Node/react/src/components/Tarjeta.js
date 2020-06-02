import React, { Fragment } from "react";
//importar componentes
import Envio from "./Envio";
//importar estilos
import "../assets/css/Tarjeta.css";
import Image from "react-bootstrap/Image";

const Tarjeta = ({ instrumentodb }) => {
  //constantes
  const url_base_imagen = "http://localhost:3000/images/";
  //const url_base = "http://localhost:3000/instrumento/";

  //destructuring de instrumento
  let {id, instrumento,  imagen, precio, cantidadVendida} = instrumentodb;
  const captura_instrumento = (id) => {
    localStorage.setItem("id_instrumento", id);
  };
  

  return (
    <Fragment>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <a href={`DetalleProducto/${id}`}>
                  <Image
                    alt="Imagen de instrumento"
                    src={url_base_imagen + imagen}
                    onClick={() => captura_instrumento(id)}
                  />
                </a>
              </td>
              <td>
                <h2>{instrumento}</h2>
                <p className="precio">${precio}</p>
                <Envio key={id} instrumento={instrumentodb} />
                <p>{cantidadVendida} vendidas</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Tarjeta;
/**
 *  <tr>
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
                <Envio key={instrumento.id} instrumento={instrumento} />
                <p>{instrumento.cantidadVendida} vendidas</p>
              </td>
            </tr>
 */
