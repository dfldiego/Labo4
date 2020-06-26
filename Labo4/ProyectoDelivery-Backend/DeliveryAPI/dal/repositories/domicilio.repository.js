const BaseRepository = require("./base.repository");

class DomicilioRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Domicilio");
  }
}

module.exports = DomicilioRepository;
