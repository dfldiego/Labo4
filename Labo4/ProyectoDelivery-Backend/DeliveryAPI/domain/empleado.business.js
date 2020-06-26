const BaseBusiness = require("./base.business");
const { Empleado } = require("./models");

class EmpleadoBusiness extends BaseBusiness {
  constructor({ EmpleadoRepository }) {
    super(EmpleadoRepository, Empleado);
  }
}

module.exports = EmpleadoBusiness;
