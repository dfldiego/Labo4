const BaseBusiness = require("./base.business");
const { Pedido } = require("./models");

class PedidoBusiness extends BaseBusiness {
  constructor({ PedidoRepository }) {
    super(PedidoRepository, Pedido);
  }
}

module.exports = PedidoBusiness;
