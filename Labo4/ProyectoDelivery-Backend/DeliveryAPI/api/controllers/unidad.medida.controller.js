const mapper = require("automapper-js");
const { UnidadMedidaDto } = require("../dtos");

class UnidadMedidaController {
  constructor({ UnidadMedidaService }) {
    this._unidadmedidaService = UnidadMedidaService;
  }

  async getUnidadMedidas(req, res) {
    let unidadmedidas = await this._unidadmedidaService.getAll();
    unidadmedidas = unidadmedidas.map((unidadmedida) =>
      mapper(UnidadMedidaDto, unidadmedida)
    );
    return res.send({
      payload: unidadmedidas,
    });
  }

  async getUnidadMedida(req, res) {
    const { id } = req.params;
    let unidadmedida = await this._unidadmedidaService.get(id);
    if (!unidadmedida) {
      return res.status(404).send();
    }
    unidadmedida = mapper(UnidadMedidaDto, unidadmedida);
    return res.send({
      payload: unidadmedida,
    });
  }

  async createUnidadMedida(req, res) {
    const { body } = req;
    const createdUnidadMedida = await this._unidadmedidaService.create(body);
    const unidadmedida = mapper(UnidadMedidaDto, createdUnidadMedida);
    return res.status(201).send({
      payload: unidadmedida,
    });
  }

  async updateUnidadMedida(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._unidadmedidaService.update(id, body);
    return res.status(204).send();
  }

  async deleteUnidadMedida(req, res) {
    const { id } = req.params;

    await this._unidadmedidaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = UnidadMedidaController;
