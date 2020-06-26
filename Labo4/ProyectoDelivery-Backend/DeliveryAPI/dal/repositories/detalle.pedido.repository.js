const BaseRepository = require("./base.repository");

class DetallePedidoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "DetallePedido");
  }
}

module.exports = DetallePedidoRepository;
