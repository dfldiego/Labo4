"use strict";
module.exports = (sequelize, DataTypes) => {
  const Domicilio = sequelize.define(
    "Domicilio",
    {
      calle_domicilio: DataTypes.STRING,
      numero_domicilio: DataTypes.INTEGER,
      piso_domicilio: DataTypes.INTEGER,
      nro_departamento: DataTypes.INTEGER,
      localidadId: DataTypes.INTEGER,
    },
    {}
  );
  Domicilio.associate = function (models) {
    Domicilio.belongsTo(models.Localidad); //Domicilio pertenece a localidad
    Domicilio.hasOne(models.Persona),
      {
        foreignKey: "domicilioId",
        as: "personas",
      };
  };
  return Domicilio;
};
