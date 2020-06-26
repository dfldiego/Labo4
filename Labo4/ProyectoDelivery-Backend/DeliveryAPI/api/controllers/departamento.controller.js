const mapper = require("automapper-js");
const { DepartamentoDto } = require("../dtos");

class DepartamentoController {
  constructor({ DepartamentoService }) {
    this._departamentoService = DepartamentoService;
  }

  async getDepartamentos(req, res) {
    let departamentos = await this._departamentoService.getAll();
    departamentos = departamentos.map((departamento) =>
      mapper(DepartamentoDto, departamento)
    );
    return res.send({
      payload: departamentos,
    });
  }

  async getDepartamento(req, res) {
    const { id } = req.params;
    let departamento = await this._departamentoService.get(id);
    if (!departamento) {
      return res.status(404).send();
    }
    departamento = mapper(DepartamentoDto, departamento);
    return res.send({
      payload: departamento,
    });
  }

  async createDepartamento(req, res) {
    const { body } = req;
    const createdDepartamento = await this._departamentoService.create(body);
    const departamento = mapper(DepartamentoDto, createdDepartamento);
    return res.status(201).send({
      payload: departamento,
    });
  }

  async updateDepartamento(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._departamentoService.update(id, body);
    return res.status(204).send();
  }

  async deleteDepartamento(req, res) {
    const { id } = req.params;

    await this._departamentoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = DepartamentoController;
