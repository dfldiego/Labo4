const BaseRepository = require("./base.repository");

class ConfiguracionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Configuracion");
  }
}

module.exports = ConfiguracionRepository;
