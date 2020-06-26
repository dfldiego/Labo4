const { Router } = require("express");
module.exports = function ({ UnidadMedidaController }) {
  const router = Router();
  router.get(
    "/",
    UnidadMedidaController.getUnidadMedidas.bind(UnidadMedidaController)
  );
  router.get(
    "/:id",
    UnidadMedidaController.getUnidadMedida.bind(UnidadMedidaController)
  );
  router.post(
    "/",
    UnidadMedidaController.createUnidadMedida.bind(UnidadMedidaController)
  );
  router.put(
    "/:id",
    UnidadMedidaController.updateUnidadMedida.bind(UnidadMedidaController)
  );
  router.delete(
    "/:id",
    UnidadMedidaController.deleteUnidadMedida.bind(UnidadMedidaController)
  );
  return router;
};
