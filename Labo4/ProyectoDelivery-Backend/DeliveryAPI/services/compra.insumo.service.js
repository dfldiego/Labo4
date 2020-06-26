const BaseService = require("./base.service");
class CompraInsumoService extends BaseService {
  constructor({ CompraInsumoBusiness }) {
    super(CompraInsumoBusiness);
  }
}

module.exports = CompraInsumoService;
