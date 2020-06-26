const BaseBusiness = require("./base.business");
const { RolEmpleado } = require("./models");

class RolEmpleadoBusiness extends BaseBusiness {
  constructor({ RolEmpleadoRepository }) {
    super(RolEmpleadoRepository, RolEmpleado);
  }
}

module.exports = RolEmpleadoBusiness;
