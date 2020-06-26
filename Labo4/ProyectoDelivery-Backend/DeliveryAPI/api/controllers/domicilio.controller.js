const mapper = require("automapper-js");
const { DomicilioDto } = require("../dtos");

class DomicilioController {
  constructor({ DomicilioService }) {
    this._domicilioService = DomicilioService;
  }

  async getDomicilios(req, res) {
    let domicilios = await this._domicilioService.getAll();
    domicilios = domicilios.map((domicilio) => mapper(DomicilioDto, domicilio));
    return res.send({
      payload: domicilios,
    });
  }

  async getDomicilio(req, res) {
    const { id } = req.params;
    let domicilio = await this._domicilioService.get(id);
    if (!domicilio) {
      return res.status(404).send();
    }
    domicilio = mapper(DomicilioDto, domicilio);
    return res.send({
      payload: domicilio,
    });
  }

  async createDomicilio(req, res) {
    const { body } = req;
    const createdDomicilio = await this._domicilioService.create(body);
    const domicilio = mapper(DomicilioDto, createdDomicilio);
    return res.status(201).send({
      payload: domicilio,
    });
  }

  async updateDomicilio(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._domicilioService.update(id, body);
    return res.status(204).send();
  }

  async deleteDomicilio(req, res) {
    const { id } = req.params;

    await this._domicilioService.delete(id);
    return res.status(204).send();
  }
}

module.exports = DomicilioController;
