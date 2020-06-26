"use strict";
module.exports = (sequelize, DataTypes) => {
  const StockInsumo = sequelize.define(
    "StockInsumo",
    {
      stock_actual: DataTypes.DOUBLE,
      stock_minimo: DataTypes.DOUBLE,
      estado: DataTypes.BOOLEAN,
      unidadmedidaId: DataTypes.INTEGER,
    },
    {}
  );
  StockInsumo.associate = function (models) {
    StockInsumo.belongsTo(models.UnidadMedida);
    StockInsumo.hasMany(models.Insumo),
      {
        foreignKey: "stockinsumoId",
        as: "Insumos",
      };
  };
  return StockInsumo;
};
