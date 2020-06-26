"use strict";
module.exports = (sequelize, DataTypes) => {
  const CompraInsumo = sequelize.define(
    "CompraInsumo", {
      cantidad_compra_articulo_insumo: DataTypes.INTEGER,
      precio_unitario: DataTypes.DOUBLE,
      fecha_compra: DataTypes.DATEONLY,
      unidadmedidaId: DataTypes.INTEGER,
    }, {}
  );
  CompraInsumo.associate = function (models) {
    CompraInsumo.belongsTo(models.UnidadMedida, {
      foreignKey: "unidadmedidaId"
    });
    CompraInsumo.hasMany(models.Insumo), {
      foreignKey: "stockinsumoId",
      as: "Insumos",
    };
  };
  return CompraInsumo;
};