import React, { Fragment } from "react";
import "./assets/css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Switch, Route } from "react-router-dom";
//importar componentes
import Home from "./components/Home";
import DondeEstamos from "./components/DondeEstamos";
import Productos from "./components/Productos";
import DetalleProducto from "./components/DetalleProducto";
import Formulario from './components/Formulario'
import FormularioCreate from './components/FormularioCreate';
import FormularioUpdate from './components/FormularioUpdate';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/donde_estamos" component={DondeEstamos}></Route>
        <Route exact path="/productos" component={Productos}></Route>
        <Route path="/detalleProducto/:id" component={DetalleProducto} ></Route>
        <Route exact path="/formulario" component={Formulario} ></Route>
        <Route exact path="/formulario/agregar" component={FormularioCreate} ></Route>
        <Route exact path="/formulario/:id" render={({match}) => <FormularioUpdate id={match.params.id}></FormularioUpdate>}></Route>
      </Switch>
    </Fragment>
  );
};

export default App;

/**
 * 
const InstrumentoEdit = (id) => {
  return <FormularioUpdate id={id}></FormularioUpdate>
}
 */