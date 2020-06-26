const BaseBusiness = require("./base.business");
const { Departamento } = require("./models");

class DepartamentoBusiness extends BaseBusiness {
  constructor({ DepartamentoRepository }) {
    super(DepartamentoRepository, Departamento);
  }
}

module.exports = DepartamentoBusiness;
