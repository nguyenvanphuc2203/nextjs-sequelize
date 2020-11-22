'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('deposits', [
      {
        userId: 1,
        amount: 50000,
        gate:'Vietcombank',
        action: '+',
        SoThamChieu: '282828-299222',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        amount: 100000,
        gate:'Vietcombank',
        action: '+',
        SoThamChieu: '282828-299222',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        amount: 20000,
        gate:'Vietcombank',
        action: '+',
        SoThamChieu: '282828-299222',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        amount: 250000,
        gate:'Vietcombank',
        action: '+',
        SoThamChieu: '282828-299222',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('deposits', null, {});
  },
};
