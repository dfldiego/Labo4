const mapper = require("automapper-js");
const { UsuarioDto } = require("../dtos");

class UsuarioController {
  constructor({ UsuarioService }) {
    this._usuarioService = UsuarioService;
  }

  async getUsuarios(req, res) {
    let usuarios = await this._usuarioService.getAll();
    usuarios = usuarios.map((usuario) => mapper(UsuarioDto, usuario));
    return res.send({
      payload: usuarios,
    });
  }

  async getUsuario(req, res) {
    const { id } = req.params;
    let usuario = await this._usuarioService.get(id);
    if (!usuario) {
      return res.status(404).send();
    }
    usuario = mapper(UsuarioDto, usuario);
    return res.send({
      payload: usuario,
    });
  }

  async createUsuario(req, res) {
    const { body } = req;
    const createdUsuario = await this._usuarioService.create(body);
    const usuario = mapper(UsuarioDto, createdUsuario);
    return res.status(201).send({
      payload: usuario,
    });
  }

  async updateUsuario(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._usuarioService.update(id, body);
    return res.status(204).send();
  }

  async deleteUsuario(req, res) {
    const { id } = req.params;

    await this._usuarioService.delete(id);
    return res.status(204).send();
  }
}

module.exports = UsuarioController;
