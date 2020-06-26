const BaseRepository = require("./base.repository");

class PersonaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Persona");
  }
}

module.exports = PersonaRepository;
