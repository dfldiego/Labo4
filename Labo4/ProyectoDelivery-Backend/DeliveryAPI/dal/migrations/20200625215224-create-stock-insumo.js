"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StockInsumos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stock_actual: {
        type: Sequelize.DOUBLE,
      },
      stock_minimo: {
        type: Sequelize.DOUBLE,
      },
      estado: {
        type: Sequelize.BOOLEAN,
      },
      unidadmedidaId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "UnidadMedidas",
          key: "id",
        },
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
    return queryInterface.dropTable("StockInsumos");
  },
};
