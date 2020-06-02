import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import "../assets/css/DetalleProducto.css";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/" id="inicio">INICIO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/donde_estamos">Donde Estamos</Nav.Link>
          <Nav.Link href="/productos">Productos</Nav.Link>
          <Nav.Link href="/formulario">Formulario</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light" id="inicio">Buscar</Button>
        </Form>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
