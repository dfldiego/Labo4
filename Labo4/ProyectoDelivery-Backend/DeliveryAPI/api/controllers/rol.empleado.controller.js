const mapper = require("automapper-js");
const { RolEmpleadoDto } = require("../dtos");

class RolEmpleadoController {
  constructor({ RolEmpleadoService }) {
    this._RolEmpleadoService = RolEmpleadoService;
  }

  async getRolEmpleados(req, res) {
    let rolEmpleados = await this._RolEmpleadoService.getAll();
    rolEmpleados = rolEmpleados.map((rolEmpleado) =>
      mapper(RolEmpleadoDto, rolEmpleado)
    );
    return res.send({
      payload: rolEmpleados,
    });
  }

  async getRolEmpleado(req, res) {
    const { id } = req.params;
    let rolEmpleado = await this._RolEmpleadoService.get(id);
    if (!rolEmpleado) {
      return res.status(404).send();
    }
    rolEmpleado = mapper(RolEmpleadoDto, rolEmpleado);
    return res.send({
      payload: rolEmpleado,
    });
  }

  async createRolEmpleado(req, res) {
    const { body } = req;
    const createdRolEmpleado = await this._RolEmpleadoService.create(body);
    const rolEmpleado = mapper(RolEmpleadoDto, createdRolEmpleado);
    return res.status(201).send({
      payload: rolEmpleado,
    });
  }

  async updateRolEmpleado(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._RolEmpleadoService.update(id, body);
    return res.status(204).send();
  }

  async deleteRolEmpleado(req, res) {
    const { id } = req.params;

    await this._RolEmpleadoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = RolEmpleadoController;
