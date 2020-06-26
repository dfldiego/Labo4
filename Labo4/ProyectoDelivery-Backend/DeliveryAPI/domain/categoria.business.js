const BaseBusiness = require("./base.business");
const { Categoria } = require("./models");

class CategoriaBusiness extends BaseBusiness {
  constructor({ CategoriaRepository }) {
    super(CategoriaRepository, Categoria);
  }
}

module.exports = CategoriaBusiness;
