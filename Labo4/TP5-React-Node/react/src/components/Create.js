import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Create = () => {
  const [imageFile, setimageFile] = useState({});
  const [instrumento_c, setinstrumento_c] = useState({
    instrumento: "",
    marca: "",
    modelo: "",
    imagen: "null",
    precio: "",
    costoEnvio: "",
    cantidadVendida: "",
    descripcion: "",
  });
  var actualizarState = (e) => {
    setinstrumento_c({
      ...instrumento_c,
      [e.target.name]: e.target.value
    });
  };
  //CAPTURAR IMAGEN -> sin esto no me sube la imagen al servidor.
  var capturarImagen = (e) => {
    setinstrumento_c({
      ...instrumento_c,
      [e.target.name]: e.target.files[0].name,
    });
    setimageFile({
      ...imageFile,
      [e.target.name]: e.target.files[0],
    });
  };
  //CARGAR IMAGEN
  const cargaImagen = (e) => {
    let formData = new FormData();
    formData.append("imagen", imageFile.imagen);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        console.log("image:" + image);
      });
  };
  //CARGAR FORMULARIO
  const cargaForm = (e) => {
    e.preventDefault();
    //me sube la imagen
    cargaImagen(e);
    const data = JSON.stringify(instrumento_c);
    console.log("DATA:" + data);
    //header espera un json y lo estabamos pasando como texto plano.
    fetch("http://localhost:3000/instrumento/", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((instrumento) => console.log(instrumento));
  };
  return (
    <form onSubmit={cargaForm}>
      <div className="form-group col-md-6">
        <label htmlFor="instrumento">Instrumento:</label>
        <input
          type="text"
          className="form-control"
          name="instrumento"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="marca">Marca:</label>
        <input
          type="text"
          className="form-control"
          name="marca"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="modelo">Modelo:</label>
        <input
          type="text"
          className="form-control"
          name="modelo"
          onChange={actualizarState}
        />
      </div>

      <div className="form-group col-md-6">
        <div className="fileupload fileupload-new" data-provides="fileupload">
          <div className="fileupload-preview thumbnail estilo-formulario-update"></div>
          <div>
            <span className="btn btn-file">
              <input type="file" name="imagen" onChange={capturarImagen} />
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
          onChange={actualizarState}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="costoEnvio">Costo de Envio:</label>
        <input
          type="text"
          className="form-control"
          name="costoEnvio"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="cantidadVendida">Cantidad Vendida:</label>
        <input
          type="number"
          className="form-control"
          name="cantidadVendida"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="descripcion">Descripcion:</label>
        <input
          type="text"
          className="form-control"
          name="descripcion"
          onChange={actualizarState}
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
  );
};

export default Create;
