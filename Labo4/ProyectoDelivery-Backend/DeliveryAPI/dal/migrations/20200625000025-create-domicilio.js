"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Domicilios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      calle_domicilio: {
        type: Sequelize.STRING,
      },
      numero_domicilio: {
        type: Sequelize.INTEGER,
      },
      piso_domicilio: {
        type: Sequelize.INTEGER,
      },
      nro_departamento: {
        type: Sequelize.INTEGER,
      },
      localidadId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Localidads",
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
    return queryInterface.dropTable("Domicilios");
  },
};
