import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import "../assets/css/home.css";

const Home = () => {
  const descripcion ="Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el  conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.";
  
  return (
    <Fragment>
      <Navigation />
      <Container>
        <h1 className="titulo">Musical Hendrix</h1>
        <p className="descripcion">{descripcion}</p>
      </Container>
    </Fragment>
  );
};

export default Home;
