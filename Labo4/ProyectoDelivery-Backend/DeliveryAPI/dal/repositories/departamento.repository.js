const BaseRepository = require("./base.repository");

class DepartamentoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Departamento");
  }
}

module.exports = DepartamentoRepository;
