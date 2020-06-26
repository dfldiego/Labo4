"use strict";
module.exports = (sequelize, DataTypes) => {
  const Articulo = sequelize.define(
    "Articulo", {
      denominacion_articulo: DataTypes.STRING,
      imagen_articulo: DataTypes.STRING,
      categoriaId: DataTypes.INTEGER,
      historialarticuloventaId: DataTypes.INTEGER,
    }, {}
  );
  Articulo.associate = function (models) {
    Articulo.belongsTo(models.Categoria, {
      foreignKey: "categoriaId"
    });
    Articulo.belongsToMany(models.Insumo, {
      through: "ArticuloInsumo",
      as: "Insumos",
      foreignKey: "articuloId",
    });
    Articulo.belongsTo(models.HistorialArticuloVenta, {
      foreignKey: "historialarticuloventaId"
    });
    Articulo.belongsToMany(models.Pedido, {
      through: "DetallePedido",
      as: "Pedidos",
      foreignKey: "articuloId",
    });
  };
  return Articulo;
};