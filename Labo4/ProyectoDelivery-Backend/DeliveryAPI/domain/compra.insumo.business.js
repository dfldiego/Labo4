const BaseBusiness = require("./base.business");
const { CompraInsumo } = require("./models");

class CompraInsumoBusiness extends BaseBusiness {
  constructor({ CompraInsumoRepository }) {
    super(CompraInsumoRepository, CompraInsumo);
  }
}

module.exports = CompraInsumoBusiness;
