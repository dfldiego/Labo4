//importar sequelize
var Sequelize = require("sequelize");
//importar conexion a la base de datos
var sequelize = require("./database");

//nombre de la tabla
var nombreTabla = "instrumentos";

/*metodo define(): 
1°nombre de BBDD
2°objeto: atributos/campo de la tabla de BBDD -> 
          especificamos tipo de datos.*/

var Instrumento = sequelize.define(
  nombreTabla, {
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    instrumento: Sequelize.STRING,
    marca: Sequelize.STRING,
    modelo: Sequelize.STRING,
    imagen: Sequelize.STRING,
    precio: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "precio es requerido"
        }
      }
    },
    costoEnvio: Sequelize.STRING,
    cantidadVendida: Sequelize.INTEGER,
    descripcion: Sequelize.TEXT,
  }, {
    //quitar createdAt y updated
    timestamps: false,
  }
);

module.exports = Instrumento;