const mapper = require("automapper-js");
const { HistorialArticuloVentaDto } = require("../dtos");

class HistorialArticuloVentaController {
  constructor({ HistorialArticuloVentaService }) {
    this._historialarticuloventaService = HistorialArticuloVentaService;
  }

  async getHistorialArticuloVentas(req, res) {
    let historialarticuloventas = await this._historialarticuloventaService.getAll();
    historialarticuloventas = historialarticuloventas.map(
      (historialarticuloventa) =>
        mapper(HistorialArticuloVentaDto, historialarticuloventa)
    );
    return res.send({
      payload: historialarticuloventas,
    });
  }

  async getHistorialArticuloVenta(req, res) {
    const { id } = req.params;
    let historialarticuloventa = await this._historialarticuloventaService.get(
      id
    );
    if (!historialarticuloventa) {
      return res.status(404).send();
    }
    historialarticuloventa = mapper(
      HistorialArticuloVentaDto,
      historialarticuloventa
    );
    return res.send({
      payload: historialarticuloventa,
    });
  }

  async createHistorialArticuloVenta(req, res) {
    const { body } = req;
    const createdHistorialArticuloVenta = await this._historialarticuloventaService.create(
      body
    );
    const historialarticuloventa = mapper(
      HistorialArticuloVentaDto,
      createdHistorialArticuloVenta
    );
    return res.status(201).send({
      payload: historialarticuloventa,
    });
  }

  async updateHistorialArticuloVenta(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._historialarticuloventaService.update(id, body);
    return res.status(204).send();
  }

  async deleteHistorialArticuloVenta(req, res) {
    const { id } = req.params;

    await this._historialarticuloventaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = HistorialArticuloVentaController;
