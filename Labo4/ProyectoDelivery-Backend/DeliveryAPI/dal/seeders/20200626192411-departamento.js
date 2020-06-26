'use strict';
const faker = require('faker');
const departamentos = [...Array(100)].map((departamento) => ({
  nombre_departamento: faker.address.state(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departamentos', departamentos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Departamentos', null, {});
  }
};