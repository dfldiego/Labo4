const mapper = require("automapper-js");
const { InsumoDto } = require("../dtos");

class InsumoController {
  constructor({ InsumoService }) {
    this._insumoService = InsumoService;
  }

  async getInsumos(req, res) {
    let insumos = await this._insumoService.getAll();
    insumos = insumos.map((insumo) => mapper(InsumoDto, insumo));
    return res.send({
      payload: insumos,
    });
  }

  async getInsumo(req, res) {
    const { id } = req.params;
    let insumo = await this._insumoService.get(id);
    if (!insumo) {
      return res.status(404).send();
    }
    insumo = mapper(InsumoDto, insumo);
    return res.send({
      payload: insumo,
    });
  }

  async createInsumo(req, res) {
    const { body } = req;
    const createdInsumo = await this._insumoService.create(body);
    const insumo = mapper(InsumoDto, createdInsumo);
    return res.status(201).send({
      payload: insumo,
    });
  }

  async updateInsumo(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._insumoService.update(id, body);
    return res.status(204).send();
  }

  async deleteInsumo(req, res) {
    const { id } = req.params;

    await this._insumoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = InsumoController;
