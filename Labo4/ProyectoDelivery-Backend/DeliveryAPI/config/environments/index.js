/**aca a dotenv hay q indicarle la direccion de .env pero como esta
 * en el directorio raiz, no hay que indicarselo, se deja por defecto.
 */
require("dotenv").config();
//importando los ambientes
const PRODUCTION = require("./production");
const DEVELOPMENT = require("./development");
const QA = require("./qa");
/*
extraer una variable de entorno llamada NODE_ENV que es el environment 
en el que se encuentra nuestro software en este momento.
Esta variable la configuran los sistemas operativos donde esta desplegada
nuestra app automaticamente.
*/
const { NODE_ENV } = process.env;
//Por defecto asignamos ambiente -> DEVELOPMENT
let currentEnv = DEVELOPMENT;
/**
 * Verificamos en que environment estamos
 */
if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
  currentEnv = QA;
}

module.exports = currentEnv;
