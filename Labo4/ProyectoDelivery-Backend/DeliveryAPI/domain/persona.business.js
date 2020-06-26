const BaseBusiness = require("./base.business");
const { Persona } = require("./models");

class PersonaBusiness extends BaseBusiness {
  constructor({ PersonaRepository }) {
    super(PersonaRepository, Persona);
  }
}

module.exports = PersonaBusiness;
