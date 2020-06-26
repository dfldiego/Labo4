"use strict";
module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define(
    "Empleado",
    {
      personaId: DataTypes.INTEGER,
      dni_empleado: DataTypes.INTEGER,
    },
    {}
  );
  Empleado.associate = function (models) {
    Empleado.belongsTo(models.Persona, {
      onDelete: "CASCADE",
    });
    Empleado.belongsToMany(models.Rol, {
      through: "RolEmpleado",
      as: "rols",
      foreignKey: "empleadoId",
    });
  };
  return Empleado;
};
