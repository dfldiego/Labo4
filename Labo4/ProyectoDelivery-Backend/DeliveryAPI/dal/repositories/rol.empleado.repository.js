const BaseRepository = require("./base.repository");

class RolEmpleadoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "RolEmpleado");
  }
}

module.exports = RolEmpleadoRepository;
