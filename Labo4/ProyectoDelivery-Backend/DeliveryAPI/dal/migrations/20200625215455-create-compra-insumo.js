"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CompraInsumos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cantidad_compra_articulo_insumo: {
        type: Sequelize.INTEGER,
      },
      precio_unitario: {
        type: Sequelize.DOUBLE,
      },
      fecha_compra: {
        type: Sequelize.DATEONLY,
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
    return queryInterface.dropTable("CompraInsumos");
  },
};
