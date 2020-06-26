const { Router } = require("express");
module.exports = function ({ RolController }) {
  const router = Router();

  router.get("/", RolController.getRoles.bind(RolController));
  router.get("/:id", RolController.getRol.bind(RolController));
  router.post("/", RolController.createRol.bind(RolController));
  router.put("/:id", RolController.updateRol.bind(RolController));
  router.delete("/:id", RolController.deleteRol.bind(RolController));
  return router;
};
