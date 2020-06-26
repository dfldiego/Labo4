const BaseService = require("./base.service");
class EmpleadoService extends BaseService {
  constructor({ EmpleadoBusiness }) {
    super(EmpleadoBusiness);
  }
}

module.exports = EmpleadoService;
