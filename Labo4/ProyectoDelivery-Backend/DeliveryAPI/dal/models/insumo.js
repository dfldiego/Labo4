"use strict";
module.exports = (sequelize, DataTypes) => {
  const Insumo = sequelize.define(
    "Insumo",
    {
      denominacion_insumo: DataTypes.STRING,
      comprainsumoId: DataTypes.INTEGER,
      stockinsumoId: DataTypes.INTEGER,
    },
    {}
  );
  Insumo.associate = function (models) {
    Insumo.belongsTo(models.CompraInsumo);
    Insumo.belongsTo(models.StockInsumo);
    Insumo.belongsToMany(models.Articulo, {
      through: "ArticuloInsumo",
      as: "Articulos",
      foreignKey: "insumoId",
    });
  };
  return Insumo;
};
