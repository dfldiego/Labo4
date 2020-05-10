import React, { Fragment, useState } from "react";
import Navigation from "./Navigation";
import { instrumentos } from "../Datos/instrumentos.json";
import Tarjeta from "./Tarjeta";
import Container from "react-bootstrap/Container";
import "../assets/css/home.css";

const Productos = () => {
  //Traer los instrumentos del json
  const [listaInstrumentos] = useState([instrumentos]);

  return (
    <Fragment>
      <Navigation />
      <Container>
        <h1 className="titulo">Lista de Instrumentos</h1>
        {listaInstrumentos.map((instrumentos) =>
          instrumentos.map((instrumento) => 
            <Tarjeta 
                key={instrumento.id}
                instrumento={instrumento}
            />
          )
        )}
      </Container>
    </Fragment>
  );
};

export default Productos;
