import React, { Fragment } from "react";
//importar componentes
import Navigation from "./Navigation";
import Create from "./Create";
//importar estilos
import "../assets/css/index.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const FormularioCreate = () => {
  return (
    <Fragment>
      <Navigation />
      <Container>
        <h1>Agregar un instrumento musical:</h1>
        <Create />
      </Container>
    </Fragment>
  );
};

export default FormularioCreate;
