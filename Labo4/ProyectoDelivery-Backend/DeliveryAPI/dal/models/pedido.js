"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define(
    "Pedido",
    {
      clienteId: DataTypes.INTEGER,
      fecha_pedido: DataTypes.DATEONLY,
      hora_entrada_pedido: DataTypes.TIME,
      hora_estimada_entrega: DataTypes.TIME,
      tipo_de_envio: DataTypes.STRING,
      estadosPedidoId: DataTypes.INTEGER,
      forma_pago: DataTypes.STRING,
      monto_descuento: DataTypes.INTEGER,
    },
    {}
  );
  Pedido.associate = function (models) {
    Pedido.belongsTo(models.EstadosPedido);
    Pedido.belongsTo(models.Cliente);
    Pedido.belongsToMany(models.Articulo, {
      through: "DetallePedido",
      as: "Articulos",
      foreignKey: "pedidoId",
    });
  };
  return Pedido;
};
