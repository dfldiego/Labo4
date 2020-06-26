const mapper = require("automapper-js");
const {
  ConfiguracionDto
} = require("../dtos");

class ConfiguracionController {
  constructor({
    ConfiguracionService
  }) {
    this._configuracionService = ConfiguracionService;
  }

  async getConfiguracions(req, res) {
    let configuraciones = await this._configuracionService.getAll();
    configuraciones = configuraciones.map((configuracion) =>
      mapper(ConfiguracionDto, configuracion)
    );
    return res.send({
      payload: configuraciones,
    });
  }

  async getConfiguracion(req, res) {
    const {
      id
    } = req.params;
    let configuracion = await this._configuracionService.get(id);
    if (!configuracion) {
      return res.status(404).send();
    }
    configuracion = mapper(ConfiguracionDto, configuracion);
    return res.send({
      payload: configuracion,
    });
  }

  async createConfiguracion(req, res) {
    const {
      body
    } = req;
    const createdConfiguracion = await this._configuracionService.create(body);
    const configuracion = mapper(ConfiguracionDto, createdConfiguracion);
    return res.status(201).send({
      payload: configuracion,
    });
  }

  async updateConfiguracion(req, res) {
    const {
      body
    } = req;
    const {
      id
    } = req.params;

    await this._configuracionService.update(id, body);
    return res.status(204).send();
  }

  async deleteConfiguracion(req, res) {
    const {
      id
    } = req.params;

    await this._configuracionService.delete(id);
    return res.status(204).send();
  }
}

module.exports = ConfiguracionController;