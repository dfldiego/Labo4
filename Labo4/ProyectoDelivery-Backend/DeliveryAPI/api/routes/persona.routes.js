const { Router } = require("express");
module.exports = function ({ PersonaController }) {
  const router = Router();

  router.get("/", PersonaController.getPersonas.bind(PersonaController));
  router.get("/:id", PersonaController.getPersona.bind(PersonaController));
  router.post("/", PersonaController.createPersona.bind(PersonaController));
  router.put("/:id", PersonaController.updatePersona.bind(PersonaController));
  router.delete(
    "/:id",
    PersonaController.deletePersona.bind(PersonaController)
  );
  return router;
};
