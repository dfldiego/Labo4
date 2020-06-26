const BaseBusiness = require("./base.business");
const { UnidadMedida } = require("./models");

class UnidadMedidaBusiness extends BaseBusiness {
  constructor({ UnidadMedidaRepository }) {
    super(UnidadMedidaRepository, UnidadMedida);
  }
}

module.exports = UnidadMedidaBusiness;
