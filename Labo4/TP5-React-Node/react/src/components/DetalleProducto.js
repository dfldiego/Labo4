import React, { Fragment, useState, useEffect } from "react";
import Navigation from "./Navigation";
import Envio from "./Envio";
//import { instrumentos } from "../Datos/instrumentos.json";
//import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
//import "../assets/css/Tarjeta.css";
import "../assets/css/DetalleProducto.css";

const DetalleProducto = () => {
  //constantes
  const url_base_imagen = "http://localhost:3000/images/";
  const url_base = "http://localhost:3000/instrumento/";

  //Encontrar id del producto seleccionado.
  const id_instrumento = localStorage.getItem("id_instrumento");
  //console.log("El instrumento encontrado es: " + id_instrumento);
  //Buscar en la lista de instrumentos cual tiene el instrumento con id seleccionado
  //const [listaInstrumentos, setInstrumento] = useState([instrumentos]);
  //console.log(listaInstrumentos[0]);
  //recorrer toda la lista de instrumentos
  /*const instrumentoEncontrado = listaInstrumentos[0].filter(
    (instrumento) => instrumento.id === id_instrumento
  );*/

  const [db_detalleProducto, setdb_detalleProducto] = useState({});

  useEffect(() => {
    const getInstrumentoXIdServer = (id_instrumento) => {
      fetch(url_base + id_instrumento)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((respuesta) => setdb_detalleProducto(respuesta));
    };
    getInstrumentoXIdServer(id_instrumento);
  }, [id_instrumento]);

  /*************************** */
  //si el objeto no tiene nada, que retorne un vacio.
  if(Object.keys(db_detalleProducto).length === 0){
    return ("");
  }
  console.log(db_detalleProducto);
  //destructuring del state
  const {id, instrumento, marca, modelo, imagen, precio, cantidadVendida, descripcion} = db_detalleProducto;
 
  

  return (
    <Fragment>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Image
              className="imagen-detalle"
              alt="Imagen de instrumento"
              src={url_base_imagen + imagen}
            />
            <h6>
              Descripcion:
              <br />
              <br />
              {descripcion}
            </h6>
          </div>
          <div className="one-half column">
            <Row>{cantidadVendida} vendida</Row>
            <Row>
              <h2>{instrumento}</h2>
            </Row>
            <br />
            <Row>
              <h3>Precio:${precio}</h3>
            </Row>
            <br />
            <Row>
              <h5>Marca:{marca}</h5>
            </Row>
            <Row>
              <h5>modelo:{modelo}</h5>
            </Row>
            <br />
            <Row>
              <h6>Costo Envio:</h6>
            </Row>
            <Row>
              <Envio
                key={id}
                instrumento={db_detalleProducto}
              />
            </Row>
            <Row>
              <Nav.Link href="/productos">
                <Button variant="outline-primary" id="inicio">
                  Agregar al Carrito
                </Button>{" "}
              </Nav.Link>
            </Row>
          </div>
        </div>
        <Row>
          <Nav.Link href="/productos">
            <Button variant="outline-primary" id="inicio">
              Volver
            </Button>
          </Nav.Link>
        </Row>
      </div>
    </Fragment>
  );
};

export default DetalleProducto;
