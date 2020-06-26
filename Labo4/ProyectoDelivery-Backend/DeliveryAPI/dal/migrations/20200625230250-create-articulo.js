"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Articulos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      denominacion_articulo: {
        type: Sequelize.STRING,
      },
      imagen_articulo: {
        type: Sequelize.STRING,
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Categoria",
          key: "id",
        },
      },
      historialarticuloventaId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "HistorialArticuloVenta",
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
    return queryInterface.dropTable("Articulos");
  },
};
