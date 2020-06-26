const BaseBusiness = require("./base.business");
const { HistorialArticuloVenta } = require("./models");

class HistorialArticuloVentaBusiness extends BaseBusiness {
  constructor({ HistorialArticuloVentaRepository }) {
    super(HistorialArticuloVentaRepository, HistorialArticuloVenta);
  }
}

module.exports = HistorialArticuloVentaBusiness;
