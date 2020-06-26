const BaseRepository = require("./base.repository");

class LocalidadRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Localidad");
  }
}

module.exports = LocalidadRepository;
