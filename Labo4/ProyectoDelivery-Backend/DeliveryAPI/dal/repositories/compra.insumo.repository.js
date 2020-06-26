const BaseRepository = require("./base.repository");

class CompraInsumoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "CompraInsumo");
  }
}

module.exports = CompraInsumoRepository;
