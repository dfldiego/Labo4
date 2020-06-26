const BaseRepository = require("./base.repository");

class InsumoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Insumo");
  }
}

module.exports = InsumoRepository;
