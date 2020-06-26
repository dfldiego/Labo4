const {
  Router
} = require("express");
module.exports = function ({
  ConfiguracionController
}) {
  const router = Router();
  router.get("/", ConfiguracionController.getConfiguracions.bind(ConfiguracionController));
  router.get("/:id", ConfiguracionController.getConfiguracion.bind(ConfiguracionController));
  router.post("/", ConfiguracionController.createConfiguracion.bind(ConfiguracionController));
  router.put("/:id", ConfiguracionController.updateConfiguracion.bind(ConfiguracionController));
  router.delete("/:id", ConfiguracionController.deleteConfiguracion.bind(ConfiguracionController));
  return router;
};