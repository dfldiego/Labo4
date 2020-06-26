const mapper = require("automapper-js");
const { PersonaDto } = require("../dtos");

class PersonaController {
  constructor({ PersonaService }) {
    this._personaService = PersonaService;
  }

  async getPersonas(req, res) {
    let personas = await this._personaService.getAll();
    personas = personas.map((persona) => mapper(PersonaDto, persona));
    return res.send({
      payload: personas,
    });
  }

  async getPersona(req, res) {
    const { id } = req.params;
    let persona = await this._personaService.get(id);
    if (!persona) {
      return res.status(404).send();
    }
    persona = mapper(PersonaDto, persona);
    return res.send({
      payload: persona,
    });
  }

  async createPersona(req, res) {
    const { body } = req;
    const createdPersona = await this._personaService.create(body);
    const persona = mapper(PersonaDto, createdPersona);
    return res.status(201).send({
      payload: persona,
    });
  }

  async updatePersona(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._personaService.update(id, body);
    return res.status(204).send();
  }

  async deletePersona(req, res) {
    const { id } = req.params;

    await this._personaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = PersonaController;
