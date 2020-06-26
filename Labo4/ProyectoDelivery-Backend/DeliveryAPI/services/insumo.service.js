const BaseService = require("./base.service");
class InsumoService extends BaseService {
  constructor({ InsumoBusiness }) {
    super(InsumoBusiness);
  }
}

module.exports = InsumoService;
