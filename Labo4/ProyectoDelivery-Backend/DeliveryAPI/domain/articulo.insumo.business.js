const BaseBusiness = require("./base.business");
const { ArticuloInsumo } = require("./models");

class ArticuloInsumoBusiness extends BaseBusiness {
  constructor({ ArticuloInsumoRepository }) {
    super(ArticuloInsumoRepository, ArticuloInsumo);
  }
}

module.exports = ArticuloInsumoBusiness;
