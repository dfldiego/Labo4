"use strict";
module.exports = (sequelize, DataTypes) => {
  const UnidadMedida = sequelize.define(
    "UnidadMedida",
    {
      denominacion_unidad_medida: DataTypes.STRING,
      abreviatura: DataTypes.STRING,
    },
    {}
  );
  UnidadMedida.associate = function (models) {
    UnidadMedida.hasMany(models.StockInsumo),
      {
        foreignKey: "unidadmedidaId",
        as: "StockInsumos",
      };
    UnidadMedida.hasMany(models.CompraInsumo),
      {
        foreignKey: "unidadmedidaId",
        as: "CompraInsumos",
      };
    UnidadMedida.hasMany(models.ArticuloInsumo),
      {
        foreignKey: "unidadmedidaId",
        as: "ArticuloInsumos",
      };
  };
  return UnidadMedida;
};
