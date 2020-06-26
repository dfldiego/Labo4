const mapper = require("automapper-js");
const { CompraInsumoDto } = require("../dtos");

class CompraInsumoController {
  constructor({ CompraInsumoService }) {
    this._comprainsumoService = CompraInsumoService;
  }

  async getCompraInsumos(req, res) {
    let comprainsumos = await this._comprainsumoService.getAll();
    comprainsumos = comprainsumos.map((comprainsumo) =>
      mapper(CompraInsumoDto, comprainsumo)
    );
    return res.send({
      payload: comprainsumos,
    });
  }

  async getCompraInsumo(req, res) {
    const { id } = req.params;
    let comprainsumo = await this._comprainsumoService.get(id);
    if (!comprainsumo) {
      return res.status(404).send();
    }
    comprainsumo = mapper(CompraInsumoDto, comprainsumo);
    return res.send({
      payload: comprainsumo,
    });
  }

  async createCompraInsumo(req, res) {
    const { body } = req;
    const createdCompraInsumo = await this._comprainsumoService.create(body);
    const comprainsumo = mapper(CompraInsumoDto, createdCompraInsumo);
    return res.status(201).send({
      payload: comprainsumo,
    });
  }

  async updateCompraInsumo(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._comprainsumoService.update(id, body);
    return res.status(204).send();
  }

  async deleteCompraInsumo(req, res) {
    const { id } = req.params;

    await this._comprainsumoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = CompraInsumoController;
