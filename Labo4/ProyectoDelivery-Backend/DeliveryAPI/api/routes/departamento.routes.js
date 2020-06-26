const { Router } = require("express");
module.exports = function ({ DepartamentoController }) {
  const router = Router();
  router.get(
    "/",
    DepartamentoController.getDepartamentos.bind(DepartamentoController)
  );
  router.get(
    "/:id",
    DepartamentoController.getDepartamento.bind(DepartamentoController)
  );
  router.post(
    "/",
    DepartamentoController.createDepartamento.bind(DepartamentoController)
  );
  router.put(
    "/:id",
    DepartamentoController.updateDepartamento.bind(DepartamentoController)
  );
  router.delete(
    "/:id",
    DepartamentoController.deleteDepartamento.bind(DepartamentoController)
  );
  return router;
};
