const { Router } = require("express");
module.exports = function ({ ArticuloController }) {
  const router = Router();
  router.get("/", ArticuloController.getArticulos.bind(ArticuloController));
  router.get("/:id", ArticuloController.getArticulo.bind(ArticuloController));
  router.post("/", ArticuloController.createArticulo.bind(ArticuloController));
  router.put(
    "/:id",
    ArticuloController.updateArticulo.bind(ArticuloController)
  );
  router.delete(
    "/:id",
    ArticuloController.deleteArticulo.bind(ArticuloController)
  );
  return router;
};
