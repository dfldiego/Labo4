const BaseService = require("./base.service");
class ClienteService extends BaseService {
  constructor({ ClienteBusiness }) {
    super(ClienteBusiness);
  }
}

module.exports = ClienteService;
