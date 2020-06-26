const BaseService = require("./base.service");
class ConfiguracionService extends BaseService {
  constructor({ ConfiguracionBusiness }) {
    super(ConfiguracionBusiness);
  }
}

module.exports = ConfiguracionService;
