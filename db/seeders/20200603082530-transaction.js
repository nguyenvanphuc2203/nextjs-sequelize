'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', [
      {
        userId: 1,
        amount: 50000,
        gate:'COIN',
        quality: 44,
        product_type: 'BM',
        product_category_id: 1,
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        amount: 20000,
        gate:'COIN',
        quality: 2,
        product_type: 'BM',
        product_category_id: 3,
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        amount: 10000,
        gate:'COIN',
        quality: 13,
        product_type: 'BM',
        product_category_id: 2,
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        amount: 3000,
        gate:'COIN',
        quality: 4,
        product_type: 'BM',
        product_category_id: 1,
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};
