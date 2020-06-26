const mapper = require("automapper-js");
const { CategoriaDto } = require("../dtos");

class CategoriaController {
  constructor({ CategoriaService }) {
    this._categoriaService = CategoriaService;
  }

  async getCategorias(req, res) {
    let categorias = await this._categoriaService.getAll();
    categorias = categorias.map((categoria) => mapper(CategoriaDto, categoria));
    return res.send({
      payload: categorias,
    });
  }

  async getCategoria(req, res) {
    const { id } = req.params;
    let categoria = await this._categoriaService.get(id);
    if (!categoria) {
      return res.status(404).send();
    }
    categoria = mapper(CategoriaDto, categoria);
    return res.send({
      payload: categoria,
    });
  }

  async createCategoria(req, res) {
    const { body } = req;
    const createdCategoria = await this._categoriaService.create(body);
    const categoria = mapper(CategoriaDto, createdCategoria);
    return res.status(201).send({
      payload: categoria,
    });
  }

  async updateCategoria(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._categoriaService.update(id, body);
    return res.status(204).send();
  }

  async deleteCategoria(req, res) {
    const { id } = req.params;

    await this._categoriaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = CategoriaController;
