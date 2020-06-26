const { Router } = require("express");
module.exports = function ({ PedidoController }) {
  const router = Router();
  router.get("/", PedidoController.getPedidos.bind(PedidoController));
  router.get("/:id", PedidoController.getPedido.bind(PedidoController));
  router.post("/", PedidoController.createPedido.bind(PedidoController));
  router.put("/:id", PedidoController.updatePedido.bind(PedidoController));
  router.delete("/:id", PedidoController.deletePedido.bind(PedidoController));
  return router;
};
