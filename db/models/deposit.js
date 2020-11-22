'use strict';
module.exports = (sequelize, DataTypes) => {
  const deposit = sequelize.define('deposits', {
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    gate: DataTypes.STRING,
    action: DataTypes.STRING,
    SoThamChieu: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    time_update_coin: DataTypes.DATE,
    refund: DataTypes.BOOLEAN,
    coin_updated: DataTypes.BOOLEAN
  }, {});
  deposit.associate = function(models) {
    deposit.belongsTo(models.users, {
      foreignKey: "userId",
      as: "author",
      onDelete: "CASCADE",
    });
  };
  return deposit;
};