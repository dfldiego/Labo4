const { Router } = require("express");
module.exports = function ({ LocalidadController }) {
  const router = Router();

  router.get("/", LocalidadController.getLocalidades.bind(LocalidadController));
  router.get(
    "/:id",
    LocalidadController.getLocalidad.bind(LocalidadController)
  );
  router.post(
    "/",
    LocalidadController.createLocalidad.bind(LocalidadController)
  );
  router.put(
    "/:id",
    LocalidadController.updateLocalidad.bind(LocalidadController)
  );
  router.delete(
    "/:id",
    LocalidadController.deleteLocalidad.bind(LocalidadController)
  );
  return router;
};
