'use strict';
module.exports = (sequelize, DataTypes) => {
  const RolEmpleado = sequelize.define('RolEmpleado', {
    rolId: DataTypes.INTEGER,
    empleadoId: DataTypes.INTEGER,
    fecha_ingreso: DataTypes.DATEONLY
  }, {});
  RolEmpleado.associate = function(models) {
    // associations can be defined here
  };
  return RolEmpleado;
};