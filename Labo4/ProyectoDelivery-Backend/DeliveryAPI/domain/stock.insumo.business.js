const BaseBusiness = require("./base.business");
const { StockInsumo } = require("./models");

class StockInsumoBusiness extends BaseBusiness {
  constructor({ StockInsumoRepository }) {
    super(StockInsumoRepository, StockInsumo);
  }
}

module.exports = StockInsumoBusiness;
