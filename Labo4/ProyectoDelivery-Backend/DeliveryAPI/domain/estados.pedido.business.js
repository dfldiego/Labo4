const BaseBusiness = require("./base.business");
const { EstadosPedido } = require("./models");

class EstadosPedidoBusiness extends BaseBusiness {
  constructor({ EstadosPedidoRepository }) {
    super(EstadosPedidoRepository, EstadosPedido);
  }
}

module.exports = EstadosPedidoBusiness;
