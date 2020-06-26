const mapper = require("automapper-js");
const { DetallePedidoDto } = require("../dtos");

class DetallePedidoController {
  constructor({ DetallePedidoService }) {
    this._detallepedidoService = DetallePedidoService;
  }

  async getDetallePedidos(req, res) {
    let detallepedidos = await this._detallepedidoService.getAll();
    detallepedidos = detallepedidos.map((detallepedido) =>
      mapper(DetallePedidoDto, detallepedido)
    );
    return res.send({
      payload: detallepedidos,
    });
  }

  async getDetallePedido(req, res) {
    const { id } = req.params;
    let detallepedido = await this._detallepedidoService.get(id);
    if (!detallepedido) {
      return res.status(404).send();
    }
    detallepedido = mapper(DetallePedidoDto, detallepedido);
    return res.send({
      payload: detallepedido,
    });
  }

  async createDetallePedido(req, res) {
    const { body } = req;
    const createdDetallePedido = await this._detallepedidoService.create(body);
    const detallepedido = mapper(DetallePedidoDto, createdDetallePedido);
    return res.status(201).send({
      payload: detallepedido,
    });
  }

  async updateDetallePedido(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._detallepedidoService.update(id, body);
    return res.status(204).send();
  }

  async deleteDetallePedido(req, res) {
    const { id } = req.params;

    await this._detallepedidoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = DetallePedidoController;
