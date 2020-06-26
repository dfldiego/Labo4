const mapper = require("automapper-js");
const { LocalidadDto } = require("../dtos");

class LocalidadController {
  constructor({ LocalidadService }) {
    this._localidadService = LocalidadService;
  }

  async getLocalidades(req, res) {
    let localidades = await this._localidadService.getAll();
    localidades = localidades.map((localidad) =>
      mapper(LocalidadDto, localidad)
    );
    return res.send({
      payload: localidades,
    });
  }

  async getLocalidad(req, res) {
    const { id } = req.params;
    let localidad = await this._localidadService.get(id);
    if (!localidad) {
      return res.status(404).send();
    }
    localidad = mapper(LocalidadDto, localidad);
    return res.send({
      payload: localidad,
    });
  }

  async createLocalidad(req, res) {
    const { body } = req;
    const createdLocalidad = await this._localidadService.create(body);
    const localidad = mapper(LocalidadDto, createdLocalidad);
    return res.status(201).send({
      payload: localidad,
    });
  }

  async updateLocalidad(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._localidadService.update(id, body);
    return res.status(204).send();
  }

  async deleteLocalidad(req, res) {
    const { id } = req.params;

    await this._localidadService.delete(id);
    return res.status(204).send();
  }
}

module.exports = LocalidadController;
