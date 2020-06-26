const BaseBusiness = require("./base.business");
const { Articulo } = require("./models");

class ArticuloBusiness extends BaseBusiness {
  constructor({ ArticuloRepository }) {
    super(ArticuloRepository, Articulo);
  }
}

module.exports = ArticuloBusiness;
