import React, { Fragment, useState, useEffect } from "react";
//importar componentes
import Navigation from "./Navigation";
import useSignUpForm from "./CustomHooks";
//importar estilos
import "../assets/css/index.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const FormularioUpdate = ({ id }) => {
  const [instrumento, setInstrumento] = useState({});
  var url = "http://localhost:3000/images/";

  const signup = () => {
    alert(`Instrumento creado!
           Instrumento: ${inputs.instrumento}
           Marca: ${inputs.marca}
           Modelo: ${inputs.modelo}
           Imagen: ${inputs.imagen}
           Precio: ${inputs.precio}
           Costo de Envio: ${inputs.costoEnvio}
           Cantidad Vendida: ${inputs.cantidadVendida}
           Descripcion: ${inputs.descripcion}
           `);
  };

  //destructuring a los elementos del componente
  const {
    inputs,
    handleInputChange,
    handleInputChangeImage,
    handleSubmit,
    handleOnLoad
  } = useSignUpForm(signup, id);

  //SHOW:mostrar campos del instrumento a modificar.
  useEffect(() => {
    fetch(`http://localhost:3000/instrumento/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        handleOnLoad(response.data);
      });
  }, []);

  if (instrumento === {}) {
    return <span>Loading ...</span>;
  } else {
    return (
      <Fragment>
        <Navigation />
        <Container>
          <h1>Actualizar un Instrumento: </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
              <label htmlFor="instrumento">Instrumento:</label>
              <input
                type="text"
                name="instrumento"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.instrumento}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="marca">Marca:</label>
              <input
                type="text"
                name="marca"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.marca}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="modelo">Modelo:</label>
              <input
                type="text"
                name="modelo"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.modelo}
              />
            </div>


            <div className="form-group col-md-6">
              <div
                className="fileupload fileupload-new"
                data-provides="fileupload"
              >
                <div className="fileupload-preview thumbnail estilo-formulario-update"></div>
                <div>
                  <img
                    src={url + inputs.imagen}
                    alt="imagen instrumento"
                  />
                  <br />
                  <br />
                  <span className="btn btn-file">
                    <input type="file" name="imagen" onChange={handleInputChangeImage} />
                  </span>
                </div>
              </div>
            </div>



            <div className="form-group col-md-6">
              <label htmlFor="precio">Precio:</label>
              <input
                type="number"
                name="precio"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.precio}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="costoEnvio">Costo de Envio:</label>
              <input
                type="text"
                name="costoEnvio"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.costoEnvio}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cantidadVendida">Cantidad Vendida:</label>
              <input
                type="number"
                name="cantidadVendida"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.cantidadVendida}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="descripcion">Descripcion:</label>
              <input
                type="text"
                name="descripcion"
                className="form-control"
                onChange={handleInputChange}
                value={inputs.descripcion}
              />
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-success btn-block">
                Aceptar
              </button>
              <br />
              <a className="btn btn-primary btn-block" href="/formulario">
                Volver
              </a>
            </div>
          </form>
        </Container>
      </Fragment>
    );
  }
};

export default FormularioUpdate;
