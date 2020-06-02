import React, { Fragment, useState, useEffect } from "react";
import Navigation from "./Navigation";
//import { instrumentos } from "../Datos/instrumentos.json";
import Tarjeta from "./Tarjeta";
import Container from "react-bootstrap/Container";
import "../assets/css/home.css";

const Productos = () => {
  //Traer los instrumentos del json
  //const [listaInstrumentos] = useState([instrumentos]);
  
  //Aca voy a cargar mi listado de instrumentos que vienen del servidor.
  const [db_listaInstrumentos, setdb_listaInstrumentos] = useState([]);

  useEffect(()=>{
    const getInstrumentosServer = () =>{
      fetch('http://localhost:3000/instrumento/')
      .then(response => response.json())
      .then(data => data.data)
      .then(respuesta => setdb_listaInstrumentos(respuesta))
    }
    getInstrumentosServer();
  },[]);



  return (
    <Fragment>
      <Navigation />
      <Container>
        <h1 className="titulo">Lista de Instrumentos</h1>
        {db_listaInstrumentos.map((instrumentodb) =>
            <Tarjeta 
                key={instrumentodb.id}
                instrumentodb={instrumentodb}
            />
        )}
      </Container>
    </Fragment>
  );
};

export default Productos;
