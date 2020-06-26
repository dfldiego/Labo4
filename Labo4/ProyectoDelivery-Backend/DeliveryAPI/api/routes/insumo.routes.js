const { Router } = require("express");
module.exports = function ({ InsumoController }) {
  const router = Router();
  router.get("/", InsumoController.getInsumos.bind(InsumoController));
  router.get("/:id", InsumoController.getInsumo.bind(InsumoController));
  router.post("/", InsumoController.createInsumo.bind(InsumoController));
  router.put("/:id", InsumoController.updateInsumo.bind(InsumoController));
  router.delete("/:id", InsumoController.deleteInsumo.bind(InsumoController));
  return router;
};
