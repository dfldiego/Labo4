const BaseRepository = require("./base.repository");

class UnidadMedidaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "UnidadMedida");
  }
}

module.exports = UnidadMedidaRepository;
