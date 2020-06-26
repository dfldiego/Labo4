"use strict";
module.exports = (sequelize, DataTypes) => {
  const Localidad = sequelize.define(
    "Localidad",
    {
      nombre_localidad: DataTypes.STRING,
      departamentoId: DataTypes.INTEGER,
    },
    {}
  );
  Localidad.associate = function (models) {
    Localidad.belongsTo(models.Departamento); //localidad pertenece a Departamento
    Localidad.hasMany(models.Domicilio),
      {
        foreignKey: "localidadId",
        as: "domicilios",
      };
  };
  return Localidad;
};
