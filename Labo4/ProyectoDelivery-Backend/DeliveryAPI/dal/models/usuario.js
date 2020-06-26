"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario", {
      email_usuario: DataTypes.STRING,
      contrasena_usuario: DataTypes.STRING,
      rolId: DataTypes.INTEGER,
    }, {}
  );
  Usuario.associate = function (models) {
    Usuario.belongsTo(models.Rol);
    Usuario.hasOne(models.Persona), {
      foreignKey: "usuarioId",
      as: "personas",
    };
  };
  return Usuario;
};