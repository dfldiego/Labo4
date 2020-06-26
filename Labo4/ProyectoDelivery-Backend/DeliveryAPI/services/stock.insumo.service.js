const BaseService = require("./base.service");
class StockInsumoService extends BaseService {
  constructor({ StockInsumoBusiness }) {
    super(StockInsumoBusiness);
  }
}

module.exports = StockInsumoService;
