const BaseService = require("./base.service");
class DomicilioService extends BaseService {
  constructor({ DomicilioBusiness }) {
    super(DomicilioBusiness);
  }
}

module.exports = DomicilioService;
