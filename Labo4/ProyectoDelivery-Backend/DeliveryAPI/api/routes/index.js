const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({
  ClienteRoutes,
  DepartamentoRoutes,
  DomicilioRoutes,
  EmpleadoRoutes,
  LocalidadRoutes,
  PersonaRoutes,
  RolEmpleadoRoutes,
  RolRoutes,
  UsuarioRoutes,
  StockInsumoRoutes,
  CompraInsumoRoutes,
  UnidadMedidaRoutes,
  InsumoRoutes,
  ArticuloInsumoRoutes,
  ArticuloRoutes,
  HistorialArticuloVentaRoutes,
  CategoriaRoutes,
  DetallePedidoRoutes,
  PedidoRoutes,
  EstadosPedidoRoutes,
  ConfiguracionRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(cors()).use(bodyParser.json()).use(compression());

  apiRoute.use("/cliente", ClienteRoutes);
  apiRoute.use("/departamento", DepartamentoRoutes);
  apiRoute.use("/domicilio", DomicilioRoutes);
  apiRoute.use("/empleado", EmpleadoRoutes);
  apiRoute.use("/localidad", LocalidadRoutes);
  apiRoute.use("/persona", PersonaRoutes);
  apiRoute.use("/rolempleado", RolEmpleadoRoutes);
  apiRoute.use("/rol", RolRoutes);
  apiRoute.use("/usuario", UsuarioRoutes);
  apiRoute.use("/stockinsumo", StockInsumoRoutes);
  apiRoute.use("/comprainsumo", CompraInsumoRoutes);
  apiRoute.use("/unidadmedida", UnidadMedidaRoutes);
  apiRoute.use("/insumo", InsumoRoutes);
  apiRoute.use("/articuloinsumo", ArticuloInsumoRoutes);
  apiRoute.use("/articulo", ArticuloRoutes);
  apiRoute.use("/historialarticuloventa", HistorialArticuloVentaRoutes);
  apiRoute.use("/categoria", CategoriaRoutes);
  apiRoute.use("/detallepedido", DetallePedidoRoutes);
  apiRoute.use("/pedido", PedidoRoutes);
  apiRoute.use("/estadospedido", EstadosPedidoRoutes);
  apiRoute.use("/configuracion", ConfiguracionRoutes);
  router.use("/api", apiRoute);

  return router;
};
