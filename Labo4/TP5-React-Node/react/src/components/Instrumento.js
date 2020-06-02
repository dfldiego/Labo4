import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Instrumento = ({instrumento, onDelete}) => {
  var url = "http://localhost:3000/images/";
  
  return (
    <Fragment>
      <tr>
        <th>{instrumento.id}</th>
        <td>{instrumento.instrumento}</td>
        <td>{instrumento.marca}</td>
        <td>{instrumento.modelo}</td>
        <td>
          <img src={url + instrumento.imagen} alt="imagen instrumento"/>
        </td>
        <td>{instrumento.precio}</td>
        <td>{instrumento.costoEnvio}</td>
        <td>{instrumento.cantidadVendida}</td>
        <td>{instrumento.descripcion}</td>
        <td>
          <Link className="btn btn-outline-info" id="inicio" to={"/formulario/"+instrumento.id}>
            Editar
          </Link>
        </td>
        <td>
        <button className="btn btn-outline-danger" id="inicio" onClick={() => onDelete(instrumento.id)}> Delete </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Instrumento;
