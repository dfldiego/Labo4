const { Router } = require("express");
module.exports = function ({ ArticuloInsumoController }) {
  const router = Router();
  router.get(
    "/",
    ArticuloInsumoController.getArticuloInsumos.bind(ArticuloInsumoController)
  );
  router.get(
    "/:id",
    ArticuloInsumoController.getArticuloInsumo.bind(ArticuloInsumoController)
  );
  router.post(
    "/",
    ArticuloInsumoController.createArticuloInsumo.bind(ArticuloInsumoController)
  );
  router.put(
    "/:id",
    ArticuloInsumoController.updateArticuloInsumo.bind(ArticuloInsumoController)
  );
  router.delete(
    "/:id",
    ArticuloInsumoController.deleteArticuloInsumo.bind(ArticuloInsumoController)
  );
  return router;
};
