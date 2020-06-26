const mapper = require("automapper-js");
const { EstadosPedidoDto } = require("../dtos");

class EstadosPedidoController {
  constructor({ EstadosPedidoService }) {
    this._estadosPedidoService = EstadosPedidoService;
  }

  async getEstadosPedidos(req, res) {
    let estadosPedidos = await this._estadosPedidoService.getAll();
    estadosPedidos = estadosPedidos.map((estadosPedido) =>
      mapper(EstadosPedidoDto, estadosPedido)
    );
    return res.send({
      payload: estadosPedidos,
    });
  }

  async getEstadosPedido(req, res) {
    const { id } = req.params;
    let estadosPedido = await this._estadosPedidoService.get(id);
    if (!estadosPedido) {
      return res.status(404).send();
    }
    estadosPedido = mapper(EstadosPedidoDto, estadosPedido);
    return res.send({
      payload: estadosPedido,
    });
  }

  async createEstadosPedido(req, res) {
    const { body } = req;
    const createdEstadosPedido = await this._estadosPedidoService.create(body);
    const estadosPedido = mapper(EstadosPedidoDto, createdEstadosPedido);
    return res.status(201).send({
      payload: estadosPedido,
    });
  }

  async updateEstadosPedido(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._estadosPedidoService.update(id, body);
    return res.status(204).send();
  }

  async deleteEstadosPedido(req, res) {
    const { id } = req.params;

    await this._estadosPedidoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = EstadosPedidoController;
