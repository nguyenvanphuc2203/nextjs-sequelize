'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_types', [
      {
        type: 'BM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'VIA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_types', null, {});
  },
};
