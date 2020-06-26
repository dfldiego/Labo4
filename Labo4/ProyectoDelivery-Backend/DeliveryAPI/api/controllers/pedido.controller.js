const mapper = require("automapper-js");
const { PedidoDto } = require("../dtos");

class PedidoController {
  constructor({ PedidoService }) {
    this._pedidoService = PedidoService;
  }

  async getPedidos(req, res) {
    let pedidos = await this._pedidoService.getAll();
    pedidos = pedidos.map((pedido) => mapper(PedidoDto, pedido));
    return res.send({
      payload: pedidos,
    });
  }

  async getPedido(req, res) {
    const { id } = req.params;
    let pedido = await this._pedidoService.get(id);
    if (!pedido) {
      return res.status(404).send();
    }
    pedido = mapper(PedidoDto, pedido);
    return res.send({
      payload: pedido,
    });
  }

  async createPedido(req, res) {
    const { body } = req;
    const createdPedido = await this._pedidoService.create(body);
    const pedido = mapper(PedidoDto, createdPedido);
    return res.status(201).send({
      payload: pedido,
    });
  }

  async updatePedido(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._pedidoService.update(id, body);
    return res.status(204).send();
  }

  async deletePedido(req, res) {
    const { id } = req.params;

    await this._pedidoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = PedidoController;
