import React, { Fragment, useState, useEffect } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
//importar otros..
import axios from "axios";
//importar componentes
import Navigation from "./Navigation";
import Instrumento from "./Instrumento";
//importar estilos
import Container from "react-bootstrap/Container";
import "../assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/DetalleProducto.css";
const Formulario = () => {
  const [listInstrumento, setListInstrumento] = useState([]);

    //una vez que se cargo todo el render
    useEffect(() => {
      loadInstrumentos();
    }, []);
  
    //funcion para cargar la lista de instrumentos
    const loadInstrumentos = () => {
      const url = "http://localhost:3000/instrumento/";
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            const data = res.data.data;
            setListInstrumento(data);
          } else {
            alert("Error web service");
          }
        })
        .catch((error) => {
          alert("Error server " + error);
        });
    };

  //Funcion para eliminar instrumento
  //se ejecuta cuando se acciona "eliminar"
  const onDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podrá recuperar este archivo!",
      type: "Peligro",
      showCancelButton: true,
      confirmButtonText: "si, elimínalo",
      cancelButtonText: "no, mantenlo.",
    }).then((result) => {
      if (result.value) {
        sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Tu archivo imaginario fue salvado :)", "error");
      }
    });
  };

  const sendDelete = (instrumento_id) => {
    // url de backend
    const baseUrl = "http://localhost:3000/instrumento/";
    // parameter data post network
    axios
      .delete(baseUrl + instrumento_id)
      .then((response) => {
        if (response.data.success) {
          Swal.fire(
            "Eliminado!",
            "El instrumento ha sido eliminado",
            "success"
          );
          loadInstrumentos();
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  };

  return (
    <Fragment>
      <Navigation />
      <Container>
        <div className="titulo-formulario-agregar">
          <h1>ABM de Instrumentos</h1>
          <a className="btn btn-info " id="inicio" href="/formulario/agregar">
            Agregar instrumento
          </a>
        </div>
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Instrumento</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Imagen</th>
              <th scope="col">Precio</th>
              <th scope="col">Costo Envio</th>
              <th scope="col">Cantidad Vendida</th>
              <th scope="col">Descripcion</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          {listInstrumento.map((instrumento) => (
            <Instrumento key={instrumento.id} instrumento={instrumento} onDelete={onDelete}/>
          ))}
        </table>
      </Container>
    </Fragment>
  );
};

export default Formulario;
