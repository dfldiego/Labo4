const BaseService = require("./base.service");
class DepartamentoService extends BaseService {
  constructor({ DepartamentoBusiness }) {
    super(DepartamentoBusiness);
  }
}

module.exports = DepartamentoService;
