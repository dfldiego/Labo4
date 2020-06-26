const BaseRepository = require("./base.repository");

class ClienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Cliente");
  }
}

module.exports = ClienteRepository;
