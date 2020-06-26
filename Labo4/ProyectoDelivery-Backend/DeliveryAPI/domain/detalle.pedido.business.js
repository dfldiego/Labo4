const BaseBusiness = require("./base.business");
const { DetallePedido } = require("./models");

class DetallePedidoBusiness extends BaseBusiness {
  constructor({ DetallePedidoRepository }) {
    super(DetallePedidoRepository, DetallePedido);
  }
}

module.exports = DetallePedidoBusiness;
