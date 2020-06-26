const { Router } = require("express");
module.exports = function ({ EmpleadoController }) {
  const router = Router();

  router.get("/", EmpleadoController.getEmpleados.bind(EmpleadoController));
  router.get("/:id", EmpleadoController.getEmpleado.bind(EmpleadoController));
  router.post("/", EmpleadoController.createEmpleado.bind(EmpleadoController));
  router.put(
    "/:id",
    EmpleadoController.updateEmpleado.bind(EmpleadoController)
  );
  router.delete(
    "/:id",
    EmpleadoController.deleteEmpleado.bind(EmpleadoController)
  );
  return router;
};
