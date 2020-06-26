const BaseRepository = require("./base.repository");

class EstadosPedidoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EstadosPedido");
  }
}

module.exports = EstadosPedidoRepository;
