const BaseBusiness = require("./base.business");
const { Insumo } = require("./models");

class InsumoBusiness extends BaseBusiness {
  constructor({ InsumoRepository }) {
    super(InsumoRepository, Insumo);
  }
}

module.exports = InsumoBusiness;
