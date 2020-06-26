const BaseBusiness = require("./base.business");
const { Localidad } = require("./models");

class LocalidadBusiness extends BaseBusiness {
  constructor({ LocalidadRepository }) {
    super(LocalidadRepository, Localidad);
  }
}

module.exports = LocalidadBusiness;
