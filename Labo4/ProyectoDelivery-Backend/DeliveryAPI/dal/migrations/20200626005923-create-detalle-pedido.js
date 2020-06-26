"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("DetallePedidos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Pedidos",
          key: "id",
        },
      },
      articuloId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Articulos",
          key: "id",
        },
      },
      cantidad_articulo: {
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
    return queryInterface.dropTable("DetallePedidos");
  },
};
