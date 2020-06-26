"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Personas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre_persona: {
        type: Sequelize.STRING,
      },
      apellido_persona: {
        type: Sequelize.STRING,
      },
      fecha_nacimiento: {
        type: Sequelize.DATEONLY,
      },
      telefono_persona: {
        type: Sequelize.STRING,
      },
      imagen_persona: {
        type: Sequelize.STRING,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Usuarios",
          key: "id",
        },
      },
      domicilioId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Domicilios",
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
    return queryInterface.dropTable("Personas");
  },
};
