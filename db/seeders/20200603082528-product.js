'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        product_category_id: 1,
        product: 'nguyenphuc|admndndnđ|2020202',
        description:'nguyenphuc',
        status: true,
        buyed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_category_id: 1,
        product: 'nguyenphuc2|admndndnđ|2020202',
        description:'nguyenphuc',
        status: true,
        buyed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_category_id: 3,
        product: 'nguyenphuc|admndndnđ|2020202',
        description:'nguyenphuc',
        status: true,
        buyed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_category_id: 4,
        product: 'nguyenphuc|admndndnđ|2020202',
        description:'nguyenphuc',
        status: true,
        buyed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
