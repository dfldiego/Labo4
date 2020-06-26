const BaseService = require("./base.service");
class EstadosPedidoService extends BaseService {
  constructor({ EstadosPedidoBusiness }) {
    super(EstadosPedidoBusiness);
  }
}

module.exports = EstadosPedidoService;
