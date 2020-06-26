const BaseRepository = require("./base.repository");

class HistorialArticuloVentaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "HistorialArticuloVenta");
  }
}

module.exports = HistorialArticuloVentaRepository;
