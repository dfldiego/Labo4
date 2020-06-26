'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetallePedido = sequelize.define('DetallePedido', {
    pedidoId: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER,
    cantidad_articulo: DataTypes.INTEGER
  }, {});
  DetallePedido.associate = function(models) {
    // associations can be defined here
  };
  return DetallePedido;
};