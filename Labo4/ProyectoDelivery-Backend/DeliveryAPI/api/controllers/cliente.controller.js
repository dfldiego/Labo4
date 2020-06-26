const mapper = require("automapper-js");
const { ClienteDto } = require("../dtos");

class ClienteController {
  constructor({ ClienteService }) {
    this._clienteService = ClienteService;
  }

  async getClientes(req, res) {
    let clientes = await this._clienteService.getAll();
    clientes = clientes.map((cliente) => mapper(ClienteDto, cliente));
    return res.send({
      payload: clientes,
    });
  }

  async getCliente(req, res) {
    const { id } = req.params;
    let cliente = await this._clienteService.get(id);
    if (!cliente) {
      return res.status(404).send();
    }
    cliente = mapper(ClienteDto, cliente);
    return res.send({
      payload: cliente,
    });
  }

  async createCliente(req, res) {
    const { body } = req;
    const createdCliente = await this._clienteService.create(body);
    const cliente = mapper(ClienteDto, createdCliente);
    return res.status(201).send({
      payload: cliente,
    });
  }

  async updateCliente(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._clienteService.update(id, body);
    return res.status(204).send();
  }

  async deleteCliente(req, res) {
    const { id } = req.params;

    await this._clienteService.delete(id);
    return res.status(204).send();
  }
}

module.exports = ClienteController;
