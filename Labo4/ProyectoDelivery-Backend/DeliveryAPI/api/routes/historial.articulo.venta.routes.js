const { Router } = require("express");
module.exports = function ({ HistorialArticuloVentaController }) {
  const router = Router();
  router.get(
    "/",
    HistorialArticuloVentaController.getHistorialArticuloVentas.bind(
      HistorialArticuloVentaController
    )
  );
  router.get(
    "/:id",
    HistorialArticuloVentaController.getHistorialArticuloVenta.bind(
      HistorialArticuloVentaController
    )
  );
  router.post(
    "/",
    HistorialArticuloVentaController.createHistorialArticuloVenta.bind(
      HistorialArticuloVentaController
    )
  );
  router.put(
    "/:id",
    HistorialArticuloVentaController.updateHistorialArticuloVenta.bind(
      HistorialArticuloVentaController
    )
  );
  router.delete(
    "/:id",
    HistorialArticuloVentaController.deleteHistorialArticuloVenta.bind(
      HistorialArticuloVentaController
    )
  );
  return router;
};
