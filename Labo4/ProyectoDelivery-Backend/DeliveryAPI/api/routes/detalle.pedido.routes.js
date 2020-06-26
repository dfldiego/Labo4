const { Router } = require("express");
module.exports = function ({ DetallePedidoController }) {
  const router = Router();
  router.get(
    "/",
    DetallePedidoController.getDetallePedidos.bind(DetallePedidoController)
  );
  router.get(
    "/:id",
    DetallePedidoController.getDetallePedido.bind(DetallePedidoController)
  );
  router.post(
    "/",
    DetallePedidoController.createDetallePedido.bind(DetallePedidoController)
  );
  router.put(
    "/:id",
    DetallePedidoController.updateDetallePedido.bind(DetallePedidoController)
  );
  router.delete(
    "/:id",
    DetallePedidoController.deleteDetallePedido.bind(DetallePedidoController)
  );
  return router;
};
