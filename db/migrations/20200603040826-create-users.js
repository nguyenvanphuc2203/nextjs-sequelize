'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING,
      },
      coin: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      temp_coin: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rate: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      rate_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      momo: {
        type: Sequelize.STRING,
      },
      vcb: {
        type: Sequelize.STRING,
      },
      facebookId: {
        type: Sequelize.STRING,
      },
      allow_noti:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      is_admin:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      status: {
        type: Sequelize.INTEGER(1),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
