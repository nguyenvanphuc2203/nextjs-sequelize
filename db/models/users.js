'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.TEXT,
      phone: DataTypes.STRING,
      coin: DataTypes.INTEGER,
      temp_coin: DataTypes.INTEGER,
      email: DataTypes.STRING,
      momo: DataTypes.STRING,
      vcb: DataTypes.STRING,
      facebookId: DataTypes.STRING,
      allow_noti: DataTypes.BOOLEAN,
      rate: DataTypes.FLOAT,
      rate_count: DataTypes.INTEGER,
      password: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: async function(user, options) {
          // Do stuff
          user.password = await bcrypt.hashSync(user.password, 10);
        },
      },
    },
  );
  users.associate = function(models) {
    // associations can be defined here
    // users.hasMany(models.posts, { as: 'posts' });
    // users.hasMany(models.jobs, { as: 'jobs' });
  };
  return users;
};
