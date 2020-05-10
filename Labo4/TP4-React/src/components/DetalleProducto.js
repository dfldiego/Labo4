import React, { Fragment, useState } from "react";
import Navigation from "./Navigation";
import Envio from "./Envio";
import { instrumentos } from "../Datos/instrumentos.json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../assets/css/Tarjeta.css";
import "../assets/css/DetalleProducto.css";


const DetalleProducto = () => {
  //Encontrar id del producto seleccionado.
  const id_instrumento = localStorage.getItem("id_instrumento");
  //console.log("El instrumento encontrado es: " + id_instrumento);
  //Buscar en la lista de instrumentos cual tiene el instrumento con id seleccionado
  const [listaInstrumentos, setInstrumento] = useState([instrumentos]);
  //console.log(listaInstrumentos[0]);
  //recorrer toda la lista de instrumentos
  const instrumentoEncontrado = listaInstrumentos[0].filter(
    (instrumento) => instrumento.id === id_instrumento
  );

  console.log(instrumentoEncontrado);

  return (
    <Fragment>
      <Navigation />
      <Container>
        <Row className="dos-columnas">
          <Col className="columna_uno_detalle">
            <Image
              className="imagen-detalle"
              alt="Imagen de instrumento"
              src={require(`../assets/images/${instrumentoEncontrado[0].imagen}`)}
            />
            <h6>
              Descripcion:
              <br />
              <br />
              {instrumentoEncontrado[0].descripcion}
            </h6>
          </Col>
          <Col className="columna_dos_detalle">
            <Row>{instrumentoEncontrado[0].cantidadVendida} vendida</Row>
            <Row>
              <h2>{instrumentoEncontrado[0].instrumento}</h2>
            </Row>
            <br />
            <Row>
              <h3>Precio:${instrumentoEncontrado[0].precio}</h3>
            </Row>
            <br />
            <Row>
              <h5>Marca:{instrumentoEncontrado[0].marca}</h5>
            </Row>
            <Row>
              <h5>modelo:{instrumentoEncontrado[0].modelo}</h5>
            </Row>
            <br />
            <Row>
              <h6>Costo Envio:</h6>
            </Row>
            <Row>
              <Envio
                key={instrumentoEncontrado[0].id}
                instrumento={instrumentoEncontrado[0]}
              />
            </Row>
            <Row>
              <Nav.Link href="/productos">
                <Button variant="outline-primary">Agregar al Carrito</Button>{" "}
              </Nav.Link>
            </Row>
          </Col>
        </Row>
        <Row>
          <Nav.Link href="/productos">
            <Button variant="outline-primary">Volver</Button>{" "}
          </Nav.Link>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DetalleProducto;
