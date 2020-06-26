'use strict';
const faker = require('faker');
const db = require('../models');
const Departamento = db.Departamento;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Departamento.findAll({
        distinct: 'id'
      })
      .then(Departamentos => {
        const localidads = generateFakeItems(10, Departamentos);
        return queryInterface.bulkInsert('Localidads', localidads, {});
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Localidads', null, {});
  }
};

function generateFakeItems(count, departamentos) {
  const localidads = [];
  for (let i = 0; i < count; i++) {
    const newLocalidad = {
      nombre_localidad: faker.address.city(),
      createdAt: faker.date.recent(90),
      updatedAt: new Date(),
      departamentoId: Math.ceil(Math.random() * departamentos.length)
    };
    localidads.push(newLocalidad);
  }
  return localidads;
}