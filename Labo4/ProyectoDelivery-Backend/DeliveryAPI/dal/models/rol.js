"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    "Rol",
    {
      denominacion_rol: DataTypes.STRING,
    },
    {}
  );
  Rol.associate = function (models) {
    Rol.hasMany(models.Usuario),
      {
        foreignKey: "rolId",
        as: "usuarios",
      };
    Rol.belongsToMany(models.Empleado, {
      through: "RolEmpleado",
      as: "empleados",
      foreignKey: "rolId",
    });
  };
  return Rol;
};
