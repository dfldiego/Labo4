var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "instrumentosdb_vue", //database
  "root", //usuario
  "199299", //contraseña
  {
    host: "localhost", //ip local
    dialect: "mysql", //motor de BD a usar
  }
);

//Verificar conexion de sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a sequelize");
  })
  .catch((err) => {
    console.log("No se conecto a sequelize");
  });

module.exports = sequelize;
