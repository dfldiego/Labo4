import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Create = () => {
  const [imageName, setImageName] = useState("");
  const [instrumento_c, setinstrumento_c] = useState({
    instrumento:'',
    marca:'',
    modelo:'',
    imagenFormulario:"null",
    precio:'',
    costoEnvio:'',
    cantidadVendida:'',
    descripcion:''
  });

  let {instrumento,marca,modelo,imagenFormulario,precio,costoEnvio,cantidadVendida,descripcion} = instrumento_c;


  var actualizarState = e => {
    setinstrumento_c({
      ...instrumento_c,
      [e.target.name]: e.target.value
    })
  }

  var capturarImagen = e =>{
    //var valor = e.target.value;
    console.log(e.target.value);
    setImageName("" + e.target.value);
    //var sin_path = valor.replace("C:\\fakepath\\", "");
    console.log(e.target.files[0].name);
    setinstrumento_c({
      ...instrumento_c,
      [e.target.name]: e.target.files[0]
    });
    console.log("imagen formulario en capturaImagen:" + instrumento_c.imagenFormulario);
  }

  const cargaImagen = (e) => {
    let formData = new FormData();
    console.log("imagen formulario en cargaImagen:" + imagenFormulario);
    console.log(" tipo de dato de imagenformulario: ")
    console.log(typeof imagenFormulario);
    //var imagen_string = imagenFormulario.toString();
    formData.append("imagenFormulario", imagenFormulario);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        console.log("image:" +image);
      })
  };

  const cargaForm = (e) => {
    e.preventDefault();
    console.log('posted ', imagenFormulario.name);
    
    let formData = new FormData();
    formData.append('instrumento', instrumento);
    console.log("instrumento:" + instrumento);
    formData.append('marca', marca);
    console.log("marca:" + marca);
    formData.append('modelo', modelo);
    console.log("modelo:" + modelo);
    formData.append('precio', precio);
    formData.append('costoEnvio', costoEnvio);
    formData.append('cantidadVendida', cantidadVendida);
    formData.append('descripcion', descripcion);

    cargaImagen(e);
    console.log("State imageName -->" + imageName);
    formData.append('imagenFormulario', imageName);
    const data = JSON.stringify(Object.fromEntries(formData));
    
    //header espera un json y lo estabamos pasando como texto plano.
    fetch(
      "http://localhost:3000/instrumento/",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json"
        }
      },
    )
      .then((res) => res.json())
      .then((instrumento) => console.log(instrumento));
      
  };


  return (
    <form onSubmit={cargaForm}>
      <div className="form-group col-md-6">
        <label htmlFor="instrumento">Instrumento:</label>
        <input type="text" className="form-control" name="instrumento" onChange={actualizarState} />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="marca">Marca:</label>
        <input type="text" className="form-control" name="marca" onChange={actualizarState}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="modelo">Modelo:</label>
        <input type="text" className="form-control" name="modelo" onChange={actualizarState}/>
      </div>
      <div className="form-group col-md-6">
        <div className="fileupload fileupload-new" data-provides="fileupload">
          <div className="fileupload-preview thumbnail estilo-formulario-update"></div>
          <div>
            <span className="btn btn-file">
              <input type="file" name="imagenFormulario" onChange={capturarImagen}/>
            </span>
          </div>
        </div>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="precio">Precio:</label>
        <input type="number" name="precio" className="form-control" onChange={actualizarState}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="costoEnvio">Costo de Envio:</label>
        <input type="text" className="form-control" name="costoEnvio" onChange={actualizarState}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="cantidadVendida">Cantidad Vendida:</label>
        <input type="number" className="form-control" name="cantidadVendida" onChange={actualizarState}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="descripcion">Descripcion:</label>
        <input type="text" className="form-control" name="descripcion" onChange={actualizarState} />
      </div>
      <div className="formulario-aceptar-volver ">
        <button type="submit" className="btn btn-primary boton">
          Aceptar
        </button>
        <a className="btn btn-primary boton" href="/formulario">
          Volver
        </a>
      </div>
    </form>
  );
};

export default Create;
/**
 * 
 *  const cargaImagen = (e) => {
    const formData = new FormData();
    formData.append("photo", instrumento_c.imagenFormulario);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        setImageName(image.originalname);
      });
  };

  const cargaForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const data = JSON.stringify(Object.fromEntries(formData));
    //header espera un json y lo estabamos pasando como texto plano.
    fetch(
      "http://localhost:3000/instrumento/",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      },
      cargaImagen(e)
    )
      .then((res) => res.json())
      .then((instrumento) => console.log(instrumento));
  };
 * 
 */