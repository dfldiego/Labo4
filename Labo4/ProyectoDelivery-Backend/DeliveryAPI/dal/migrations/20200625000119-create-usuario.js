"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email_usuario: {
        type: Sequelize.STRING,
      },
      contrasena_usuario: {
        type: Sequelize.STRING,
      },
      rolId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Rols",
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
    return queryInterface.dropTable("Usuarios");
  },
};
