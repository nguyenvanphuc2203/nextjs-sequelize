'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'Nguyễn',
        last_name: 'Phúc',
        email: 'nguyenvanphuc2203@gmail.com',
        password: '$2a$10$5LZOQfUrIC5L7G5aS.fWaOWutLMjMg88kcVCslUdMBBDYb2BQUCRe',
        coin: 240000,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
