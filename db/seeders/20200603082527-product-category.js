'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_categories', [
      {
        product_type: 'BM',
        name: 'BM 350',
        description:'BM sống trâu bò 350',
        price: 20000,
        number: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_type: 'BM',
        name: 'BM 50',
        description:'BM 50',
        price: 10000,
        number: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_type: 'VIA',
        name: 'Via việt',
        description:'Via việt',
        price: 5000,
        number: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_type: 'VIA',
        name: 'Via ngoại',
        description:'Via việt',
        price: 7000,
        number: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_categories', null, {});
  },
};
