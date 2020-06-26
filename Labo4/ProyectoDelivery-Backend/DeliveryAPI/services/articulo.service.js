const BaseService = require("./base.service");
class ArticuloService extends BaseService {
  constructor({ ArticuloBusiness }) {
    super(ArticuloBusiness);
  }
}

module.exports = ArticuloService;
