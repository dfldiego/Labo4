"use strict";
module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define(
    "Departamento", {
      nombre_departamento: DataTypes.STRING,
    }, {}
  );
  Departamento.associate = function (models) {
    Departamento.hasMany(models.Localidad), {
      foreignKey: "departamentoId",
      as: "localidads",
    };
  };
  return Departamento;
};