"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pedidos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clienteId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Clientes",
          key: "id",
        },
      },
      fecha_pedido: {
        type: Sequelize.DATEONLY,
      },
      hora_entrada_pedido: {
        type: Sequelize.TIME,
      },
      hora_estimada_entrega: {
        type: Sequelize.TIME,
      },
      tipo_de_envio: {
        type: Sequelize.STRING,
      },
      estadosPedidoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "EstadosPedidos",
          key: "id",
        },
      },
      forma_pago: {
        type: Sequelize.STRING,
      },
      monto_descuento: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pedidos");
  },
};
