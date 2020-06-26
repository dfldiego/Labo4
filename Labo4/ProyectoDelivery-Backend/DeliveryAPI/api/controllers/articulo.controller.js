const mapper = require("automapper-js");
const { ArticuloDto } = require("../dtos");

class ArticuloController {
  constructor({ ArticuloService }) {
    this._articuloService = ArticuloService;
  }

  async getArticulos(req, res) {
    let articulos = await this._articuloService.getAll();
    articulos = articulos.map((articulo) => mapper(ArticuloDto, articulo));
    return res.send({
      payload: articulos,
    });
  }

  async getArticulo(req, res) {
    const { id } = req.params;
    let articulo = await this._articuloService.get(id);
    if (!articulo) {
      return res.status(404).send();
    }
    articulo = mapper(ArticuloDto, articulo);
    return res.send({
      payload: articulo,
    });
  }

  async createArticulo(req, res) {
    const { body } = req;
    const createdArticulo = await this._articuloService.create(body);
    const articulo = mapper(ArticuloDto, createdArticulo);
    return res.status(201).send({
      payload: articulo,
    });
  }

  async updateArticulo(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._articuloService.update(id, body);
    return res.status(204).send();
  }

  async deleteArticulo(req, res) {
    const { id } = req.params;

    await this._articuloService.delete(id);
    return res.status(204).send();
  }
}

module.exports = ArticuloController;
