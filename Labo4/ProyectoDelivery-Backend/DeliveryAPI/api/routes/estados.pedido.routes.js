const { Router } = require("express");
module.exports = function ({ EstadosPedidoController }) {
  const router = Router();
  router.get(
    "/",
    EstadosPedidoController.getEstadosPedidos.bind(EstadosPedidoController)
  );
  router.get(
    "/:id",
    EstadosPedidoController.getEstadosPedido.bind(EstadosPedidoController)
  );
  router.post(
    "/",
    EstadosPedidoController.createEstadosPedido.bind(EstadosPedidoController)
  );
  router.put(
    "/:id",
    EstadosPedidoController.updateEstadosPedido.bind(EstadosPedidoController)
  );
  router.delete(
    "/:id",
    EstadosPedidoController.deleteEstadosPedido.bind(EstadosPedidoController)
  );
  return router;
};
