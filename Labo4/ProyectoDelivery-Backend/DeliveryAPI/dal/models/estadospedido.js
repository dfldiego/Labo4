"use strict";
module.exports = (sequelize, DataTypes) => {
  const EstadosPedido = sequelize.define(
    "EstadosPedido",
    {
      denominacion_estados_pedido: DataTypes.STRING,
    },
    {}
  );
  EstadosPedido.associate = function (models) {
    EstadosPedido.hasMany(models.Pedido),
      {
        foreignKey: "estadosPedidoId",
        as: "pedidos",
      };
  };
  return EstadosPedido;
};
