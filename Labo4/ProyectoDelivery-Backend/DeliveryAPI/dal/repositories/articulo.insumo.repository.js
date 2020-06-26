const BaseRepository = require("./base.repository");

class ArticuloInsumoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "ArticuloInsumo");
  }
}

module.exports = ArticuloInsumoRepository;
