const BaseRepository = require("./base.repository");

class StockInsumoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "StockInsumo");
  }
}

module.exports = StockInsumoRepository;
