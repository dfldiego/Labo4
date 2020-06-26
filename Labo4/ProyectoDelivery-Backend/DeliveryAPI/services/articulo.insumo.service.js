const BaseService = require("./base.service");
class ArticuloInsumoService extends BaseService {
  constructor({ ArticuloInsumoBusiness }) {
    super(ArticuloInsumoBusiness);
  }
}

module.exports = ArticuloInsumoService;
