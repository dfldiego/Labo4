"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ArticuloInsumos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      articuloId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Articulos",
          key: "id",
        },
      },
      insumoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Insumos",
          key: "id",
        },
      },
      cantidad_insumo: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("ArticuloInsumos");
  },
};
