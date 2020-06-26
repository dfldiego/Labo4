const BaseRepository = require("./base.repository");

class PedidoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pedido");
  }
}

module.exports = PedidoRepository;
