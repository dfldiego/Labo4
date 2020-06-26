const mapper = require("automapper-js");
const { ArticuloInsumoDto } = require("../dtos");

class ArticuloInsumoController {
  constructor({ ArticuloInsumoService }) {
    this._articuloinsumoService = ArticuloInsumoService;
  }

  async getArticuloInsumos(req, res) {
    let articuloinsumos = await this._articuloinsumoService.getAll();
    articuloinsumos = articuloinsumos.map((articuloinsumo) =>
      mapper(ArticuloInsumoDto, articuloinsumo)
    );
    return res.send({
      payload: articuloinsumos,
    });
  }

  async getArticuloInsumo(req, res) {
    const { id } = req.params;
    let articuloinsumo = await this._articuloinsumoService.get(id);
    if (!articuloinsumo) {
      return res.status(404).send();
    }
    articuloinsumo = mapper(ArticuloInsumoDto, articuloinsumo);
    return res.send({
      payload: articuloinsumo,
    });
  }

  async createArticuloInsumo(req, res) {
    const { body } = req;
    const createdArticuloInsumo = await this._articuloinsumoService.create(
      body
    );
    const articuloinsumo = mapper(ArticuloInsumoDto, createdArticuloInsumo);
    return res.status(201).send({
      payload: articuloinsumo,
    });
  }

  async updateArticuloInsumo(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._articuloinsumoService.update(id, body);
    return res.status(204).send();
  }

  async deleteArticuloInsumo(req, res) {
    const { id } = req.params;

    await this._articuloinsumoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = ArticuloInsumoController;
