const BaseService = require("./base.service");
class PersonaService extends BaseService {
  constructor({ PersonaBusiness }) {
    super(PersonaBusiness);
  }
}

module.exports = PersonaService;
