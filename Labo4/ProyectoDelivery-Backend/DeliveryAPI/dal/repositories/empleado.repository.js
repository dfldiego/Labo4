const BaseRepository = require("./base.repository");

class EmpleadoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Empleado");
  }
}

module.exports = EmpleadoRepository;
