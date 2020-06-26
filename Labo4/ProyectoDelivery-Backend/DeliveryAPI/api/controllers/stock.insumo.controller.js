const mapper = require("automapper-js");
const { StockInsumoDto } = require("../dtos");

class StockInsumoController {
  constructor({ StockInsumoService }) {
    this._stockinsumoService = StockInsumoService;
  }

  async getStockInsumos(req, res) {
    let stockinsumos = await this._stockinsumoService.getAll();
    stockinsumos = stockinsumos.map((stockinsumo) =>
      mapper(StockInsumoDto, stockinsumo)
    );
    return res.send({
      payload: stockinsumos,
    });
  }

  async getStockInsumo(req, res) {
    const { id } = req.params;
    let stockinsumo = await this._stockinsumoService.get(id);
    if (!stockinsumo) {
      return res.status(404).send();
    }
    stockinsumo = mapper(StockInsumoDto, stockinsumo);
    return res.send({
      payload: stockinsumo,
    });
  }

  async createStockInsumo(req, res) {
    const { body } = req;
    const createdStockInsumo = await this._stockinsumoService.create(body);
    const stockinsumo = mapper(StockInsumoDto, createdStockInsumo);
    return res.status(201).send({
      payload: stockinsumo,
    });
  }

  async updateStockInsumo(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._stockinsumoService.update(id, body);
    return res.status(204).send();
  }

  async deleteStockInsumo(req, res) {
    const { id } = req.params;

    await this._stockinsumoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = StockInsumoController;
