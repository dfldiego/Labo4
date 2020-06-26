"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("RolEmpleados", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rolId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Rols",
          key: "id",
        },
      },
      empleadoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Empleados",
          key: "id",
        },
      },
      fecha_ingreso: {
        type: Sequelize.DATEONLY,
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
    return queryInterface.dropTable("RolEmpleados");
  },
};
