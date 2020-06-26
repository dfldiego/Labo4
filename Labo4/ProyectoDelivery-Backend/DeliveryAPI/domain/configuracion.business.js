const BaseBusiness = require("./base.business");
const { Configuracion } = require("./models");

class ConfiguracionBusiness extends BaseBusiness {
  constructor({ ConfiguracionRepository }) {
    super(ConfiguracionRepository, Configuracion);
  }
}

module.exports = ConfiguracionBusiness;
