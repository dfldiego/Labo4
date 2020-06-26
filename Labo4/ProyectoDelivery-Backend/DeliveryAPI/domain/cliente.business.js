const BaseBusiness = require("./base.business");
const { Cliente } = require("./models");

class ClienteBusiness extends BaseBusiness {
  constructor({ ClienteRepository }) {
    super(ClienteRepository, Cliente);
  }
}

module.exports = ClienteBusiness;
