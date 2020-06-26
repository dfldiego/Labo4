const { Router } = require("express");
module.exports = function ({ CompraInsumoController }) {
  const router = Router();
  router.get(
    "/",
    CompraInsumoController.getCompraInsumos.bind(CompraInsumoController)
  );
  router.get(
    "/:id",
    CompraInsumoController.getCompraInsumo.bind(CompraInsumoController)
  );
  router.post(
    "/",
    CompraInsumoController.createCompraInsumo.bind(CompraInsumoController)
  );
  router.put(
    "/:id",
    CompraInsumoController.updateCompraInsumo.bind(CompraInsumoController)
  );
  router.delete(
    "/:id",
    CompraInsumoController.deleteCompraInsumo.bind(CompraInsumoController)
  );
  return router;
};
