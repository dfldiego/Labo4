const { Router } = require("express");
module.exports = function ({ StockInsumoController }) {
  const router = Router();
  router.get(
    "/",
    StockInsumoController.getStockInsumos.bind(StockInsumoController)
  );
  router.get(
    "/:id",
    StockInsumoController.getStockInsumo.bind(StockInsumoController)
  );
  router.post(
    "/",
    StockInsumoController.createStockInsumo.bind(StockInsumoController)
  );
  router.put(
    "/:id",
    StockInsumoController.updateStockInsumo.bind(StockInsumoController)
  );
  router.delete(
    "/:id",
    StockInsumoController.deleteStockInsumo.bind(StockInsumoController)
  );
  return router;
};
