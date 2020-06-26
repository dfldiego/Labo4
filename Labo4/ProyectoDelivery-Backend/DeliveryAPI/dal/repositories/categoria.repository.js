const BaseRepository = require("./base.repository");

class CategoriaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Categoria");
  }
}

module.exports = CategoriaRepository;
