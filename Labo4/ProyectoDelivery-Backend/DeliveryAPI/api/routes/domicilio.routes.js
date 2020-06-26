const { Router } = require("express");
module.exports = function ({ DomicilioController }) {
  const router = Router();

  router.get("/", DomicilioController.getDomicilios.bind(DomicilioController));
  router.get(
    "/:id",
    DomicilioController.getDomicilio.bind(DomicilioController)
  );
  router.post(
    "/",
    DomicilioController.createDomicilio.bind(DomicilioController)
  );
  router.put(
    "/:id",
    DomicilioController.updateDomicilio.bind(DomicilioController)
  );
  router.delete(
    "/:id",
    DomicilioController.deleteDomicilio.bind(DomicilioController)
  );
  return router;
};
