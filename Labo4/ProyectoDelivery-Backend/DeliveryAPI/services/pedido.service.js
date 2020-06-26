const BaseService = require("./base.service");
class PedidoService extends BaseService {
  constructor({ PedidoBusiness }) {
    super(PedidoBusiness);
  }
}

module.exports = PedidoService;
