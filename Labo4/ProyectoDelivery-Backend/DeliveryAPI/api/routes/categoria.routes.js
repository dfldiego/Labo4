const { Router } = require("express");
module.exports = function ({ CategoriaController }) {
  const router = Router();
  router.get("/", CategoriaController.getCategorias.bind(CategoriaController));
  router.get(
    "/:id",
    CategoriaController.getCategoria.bind(CategoriaController)
  );
  router.post(
    "/",
    CategoriaController.createCategoria.bind(CategoriaController)
  );
  router.put(
    "/:id",
    CategoriaController.updateCategoria.bind(CategoriaController)
  );
  router.delete(
    "/:id",
    CategoriaController.deleteCategoria.bind(CategoriaController)
  );
  return router;
};
