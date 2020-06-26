const { Router } = require("express");
module.exports = function ({ ClienteController }) {
  const router = Router();

  router.get("/", ClienteController.getClientes.bind(ClienteController));
  router.get("/:id", ClienteController.getCliente.bind(ClienteController));
  router.post("/", ClienteController.createCliente.bind(ClienteController));
  router.put("/:id", ClienteController.updateCliente.bind(ClienteController));
  router.delete(
    "/:id",
    ClienteController.deleteCliente.bind(ClienteController)
  );
  return router;
};
