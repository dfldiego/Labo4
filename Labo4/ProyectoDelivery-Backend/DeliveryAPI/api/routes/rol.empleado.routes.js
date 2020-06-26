const { Router } = require("express");
module.exports = function ({ RolEmpleadoController }) {
  const router = Router();

  router.get(
    "/",
    RolEmpleadoController.getRolEmpleados.bind(RolEmpleadoController)
  );
  router.get(
    "/:id",
    RolEmpleadoController.getRolEmpleado.bind(RolEmpleadoController)
  );
  router.post(
    "/",
    RolEmpleadoController.createRolEmpleado.bind(RolEmpleadoController)
  );
  router.put(
    "/:id",
    RolEmpleadoController.updateRolEmpleado.bind(RolEmpleadoController)
  );
  router.delete(
    "/:id",
    RolEmpleadoController.deleteRolEmpleado.bind(RolEmpleadoController)
  );
  return router;
};
