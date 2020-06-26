"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    "Categoria",
    {
      denominacion_categoria: DataTypes.STRING,
      parentId: DataTypes.INTEGER,
    },
    {}
  );
  Categoria.associate = function (models) {
    Categoria.hasMany(models.Articulo),
      {
        foreignKey: "categoriaId",
        as: "Articulos",
      };
    Categoria.belongsTo(models.Categoria);
    Categoria.hasMany(models.Categoria),
      {
        foreignKey: "parentId",
        as: "Categoria",
      };
  };
  return Categoria;
};
