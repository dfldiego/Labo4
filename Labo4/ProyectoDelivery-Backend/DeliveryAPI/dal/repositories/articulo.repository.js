const BaseRepository = require("./base.repository");

class ArticuloRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Articulo");
  }
}

module.exports = ArticuloRepository;
