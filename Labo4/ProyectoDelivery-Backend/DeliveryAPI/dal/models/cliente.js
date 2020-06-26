"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define(
    "Cliente",
    {
      personaId: DataTypes.INTEGER,
    },
    {}
  );
  Cliente.associate = function (models) {
    Cliente.belongsTo(models.Persona, {
      onDelete: "CASCADE",
    });
    Cliente.hasMany(models.Pedido),
      {
        foreignKey: "clienteId",
        as: "pedidos",
      };
  };
  return Cliente;
};
