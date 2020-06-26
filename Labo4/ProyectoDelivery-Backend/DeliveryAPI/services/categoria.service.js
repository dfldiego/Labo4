const BaseService = require("./base.service");
class CategoriaService extends BaseService {
  constructor({ CategoriaBusiness }) {
    super(CategoriaBusiness);
  }
}

module.exports = CategoriaService;
