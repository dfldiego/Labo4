const BaseBusiness = require("./base.business");
const { Domicilio } = require("./models");

class DomicilioBusiness extends BaseBusiness {
  constructor({ DomicilioRepository }) {
    super(DomicilioRepository, Domicilio);
  }
}

module.exports = DomicilioBusiness;
