'use strict';
module.exports = (sequelize, DataTypes) => {
  const Configuracion = sequelize.define('Configuracion', {
    cantidadCocineros: DataTypes.INTEGER,
    emailEmpresa: DataTypes.STRING
  }, {});
  Configuracion.associate = function(models) {
    // associations can be defined here
  };
  return Configuracion;
};