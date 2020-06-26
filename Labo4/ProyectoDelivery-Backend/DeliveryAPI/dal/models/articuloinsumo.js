'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticuloInsumo = sequelize.define('ArticuloInsumo', {
    articuloId: DataTypes.INTEGER,
    insumoId: DataTypes.INTEGER,
    cantidad_insumo: DataTypes.INTEGER,
    unidadmedidaId: DataTypes.INTEGER
  }, {});
  ArticuloInsumo.associate = function(models) {
    // associations can be defined here
  };
  return ArticuloInsumo;
};