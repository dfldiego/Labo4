"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Insumos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      denominacion_insumo: {
        type: Sequelize.STRING,
      },
      comprainsumoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "CompraInsumos",
          key: "id",
        },
      },
      stockinsumoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "StockInsumos",
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
    return queryInterface.dropTable("Insumos");
  },
};
