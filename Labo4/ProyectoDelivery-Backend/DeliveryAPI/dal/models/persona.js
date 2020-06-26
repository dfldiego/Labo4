"use strict";
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define(
    "Persona",
    {
      nombre_persona: DataTypes.STRING,
      apellido_persona: DataTypes.STRING,
      fecha_nacimiento: DataTypes.DATEONLY,
      telefono_persona: DataTypes.STRING,
      imagen_persona: DataTypes.STRING,
      usuarioId: DataTypes.INTEGER,
      domicilioId: DataTypes.INTEGER,
    },
    {}
  );
  Persona.associate = function (models) {
    Persona.belongsTo(models.Usuario);
    Persona.belongsTo(models.Domicilio);
    Persona.hasOne(models.Empleado),
      {
        foreignKey: "personaId",
        as: "empleados",
      };
    Persona.hasOne(models.Cliente),
      {
        foreignKey: "personaId",
        as: "clientes",
      };
  };
  return Persona;
};
