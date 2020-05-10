import React, { Fragment } from "react";
import "./assets/css/App.css";
import Home from "./components/Home";
import DondeEstamos from "./components/DondeEstamos";
import Productos from "./components/Productos";
import DetalleProducto from "./components/DetalleProducto";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/donde_estamos" component={DondeEstamos}></Route>
        <Route exact path="/productos" component={Productos}></Route>
        <Route path="/detalleProducto/:id" component={DetalleProducto} ></Route>
      </Switch>
    </Fragment>
  );
};

export default App;
