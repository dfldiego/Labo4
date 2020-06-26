"use strict";
module.exports = (sequelize, DataTypes) => {
  const HistorialArticuloVenta = sequelize.define(
    "HistorialArticuloVenta",
    {
      precio_venta_producto_x_unidad: DataTypes.DOUBLE,
      fecha_venta_producto: DataTypes.DATEONLY,
    },
    {}
  );
  HistorialArticuloVenta.associate = function (models) {
    HistorialArticuloVenta.hasMany(models.Articulo),
      {
        foreignKey: "historialarticuloventaId",
        as: "Articulos",
      };
  };
  return HistorialArticuloVenta;
};
