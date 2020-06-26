const mapper = require("automapper-js");
const { EmpleadoDto } = require("../dtos");

class EmpleadoController {
  constructor({ EmpleadoService }) {
    this._empleadoService = EmpleadoService;
  }

  async getEmpleados(req, res) {
    let empleados = await this._empleadoService.getAll();
    empleados = empleados.map((empleado) => mapper(EmpleadoDto, empleado));
    return res.send({
      payload: empleados,
    });
  }

  async getEmpleado(req, res) {
    const { id } = req.params;
    let empleado = await this._empleadoService.get(id);
    if (!empleado) {
      return res.status(404).send();
    }
    empleado = mapper(EmpleadoDto, empleado);
    return res.send({
      payload: empleado,
    });
  }

  async createEmpleado(req, res) {
    const { body } = req;
    const createdEmpleado = await this._empleadoService.create(body);
    const empleado = mapper(EmpleadoDto, createdEmpleado);
    return res.status(201).send({
      payload: empleado,
    });
  }

  async updateEmpleado(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._empleadoService.update(id, body);
    return res.status(204).send();
  }

  async deleteEmpleado(req, res) {
    const { id } = req.params;

    await this._empleadoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = EmpleadoController;
